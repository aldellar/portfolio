---
date: '2024-03-10'
title: 'Slug Dining'
github: 'https://github.com/aldellar/Slug-Dining'
external: ''
tech:
  - C
  - POSIX Threads
company: ''
showInProjects: true
---

I built a multithreaded C program that simulates a dining hall with students and janitors, each represented by threads. Only a few student threads can enter at a time, and janitor threads wait until the hall is empty to clean. I used mutexes and condition variables to control access and prevent race conditions.
