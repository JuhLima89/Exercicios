# Etapa 1: build da aplicação
FROM golang:1.22 as builder

WORKDIR /app

COPY go.mod ./
COPY main.go ./

RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o app

# Etapa 2: imagem final mínima
FROM scratch

COPY --from=builder /app/app /app

ENTRYPOINT ["/app"]

