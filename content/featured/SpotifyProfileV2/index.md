---
date: '2025-04-01'
title: 'Distributed Key-Value Store'
cover: './distributed-kvs.png'
github: 'https://github.com/aldellar/Distributed-Key-Value-Store'
tech:
  - Node.js
  - Express
  - Docker
  - Swagger/OpenAPI
  - Git
---

3 A fault-tolerant key-value store built using Node.js and Express, with OpenAPI 3.0 specs and primary-backup replication to ensure strong consistency across nodes. Deployed using Docker and tested through Swagger-based validation and CI pipelines.

Key features include:

- RESTful API described with OpenAPI and served via Swagger UI.
- Strong consistency using primary–backup replication.
- CI workflow that lints, tests, and pushes Docker images automatically.
