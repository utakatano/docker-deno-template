# Deno Template with Docker/Docker Compose

This is Deno template based on [Linux image](https://hub.docker.com/r/hayd/deno) without installing Deno in local.  
And you can use [VS code Remote - Containers](https://code.visualstudio.com/docs/remote/containers) and edit source file in the container with VS code extension (Now [denoland.vscode-deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) is set in devcontainer.json).

## Environment

- [Deno](https://deno.land/) ... 1.9.2

## How to run local development

1. Please run `docker-compose up` then use `docker-compose exec` command after build is done.

```sh
% docker-compose up -d --build 
% docker-compose exec deno bash
```

or click the icon on the lower left corner when you already installed [VS code Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) in your VS code.

2. In the docker container, please follow the process when you start sample code.

- in the case of `docker-compose exec deno bash`

```sh
/src＃ deno run --allow-net hello.ts
```

- in the case of using VS code Remote - Containers

```sh
/workspace＃ cd src
/workspace/src＃ deno run --allow-net hello.ts
```

3. You can see the result in `http://localhost:8080` with your browser.