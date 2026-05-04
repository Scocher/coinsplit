FROM node:22-bookworm

# Install system dependencies
RUN apt-get update && apt-get install -y \
  git \
  curl \
  jq \
  && rm -rf /var/lib/apt/lists/*

# Install GitHub CLI
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg \
  | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
  && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" \
  | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
  && apt-get update && apt-get install -y gh \
  && rm -rf /var/lib/apt/lists/*

# Rename the base image's "node" user (UID 1000) to "agent".
# This keeps UID 1000 so that --userns=keep-id (Podman) and
# --user 1000:1000 (Docker) map to the correct home directory owner.
RUN groupmod -n agent node \
  && usermod -d /home/agent -m -l agent node \
  && chown -R agent:agent /home/agent \
  && chmod -R a+rwX /home/agent

# Install Codex CLI (run as root before USER agent)
RUN npm install -g @openai/codex

USER agent

WORKDIR /home/agent

# Allow git to operate in the bind-mounted workspace directory.
# Sandcastle mounts the worktree at /home/agent/workspace at container start,
# but git refuses to use directories not owned by the current user unless
# they are explicitly marked safe.
RUN git config --global --add safe.directory /home/agent/workspace

# Entrypoint: log codex in using the API key injected by sandcastle, then idle.
# Codex does not read OPENAI_API_KEY from the environment at runtime — it requires
# auth.json to be written via `codex login --with-api-key` first.
RUN printf '#!/bin/bash\nif [ -n "$OPENAI_API_KEY" ]; then\n  echo "$OPENAI_API_KEY" | codex login --with-api-key\nfi\nexec sleep infinity\n' > /home/agent/entrypoint.sh \
  && chmod +x /home/agent/entrypoint.sh

# In worktree sandbox mode, Sandcastle bind-mounts the git worktree at /home/agent/workspace
# and overrides the working directory to /home/agent/workspace at container start.
# Structure your Dockerfile so that /home/agent/workspace can serve as the project root.
ENTRYPOINT ["/home/agent/entrypoint.sh"]
