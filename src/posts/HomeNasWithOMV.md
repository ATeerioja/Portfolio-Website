---
title: Building and deploying my own home NAS
date: 2026-07-08
summary: Building a LAN attached NAS with OMV
draft: false
---

# Building My Home Media Server: From Mass Storage to VR Streaming

*By Anton Teerioja — 08.07.2026*

## The Starting Point

I had an old server sitting around running Ubuntu 22.04.1 LTS. I got it on my first year of university to play arround with setting up and managing servers and learning some linux with it. Now I had an idea when I found some old hard-drives to make a nas. The plan was to start with basic network storage and layer in real streaming capability later. In the end I just stuck to using it as raw file storage.

## Choosing the OS

I was free/open-source only, with mixed drive sizes I planned to expand over time, and comfortable mixing GUI work with some command-line. That combination ruled out TrueNAS SCALE (wants matched drives for ZFS) and Unraid (not free), and pointed to **OpenMediaVault (OMV)** — Debian-based, familiar coming from Ubuntu, with mergerfs + SnapRAID as the pooling/parity solution for mixed drives.

The install process was simple enough but setting up the users on the server took a bit of time especially with getting ssh to work without a password. The real problem was how the default OMV admin user didn't have a home folder on the server so the public key for ssh wasn't being saved anywhere.

## Mass Storage

- Pooled drives with **mergerfs** so I could keep adding drives of any size without rebuilding anything
- Added **SnapRAID** for parity protection across the pool
- Set up an SMB share for network access from all devices on my local network
- Organized folders in a Jellyfin/Plex-friendly structure from day one: `Movies/Movie Name (Year)/`, `TV Shows/Show/Season 01/` (which ended up being mostly useless because I didn't go with a mediaserver)

Setting up the storage was very easy and this setup allows me to easily expand in the future if necessary.


## Keeping It Powered Down

Since the server doesn't need to run 24/7, I set it up on a remote-controlled wall plug:
- BIOS/UEFI set to **[Power On / Last State]** on AC power restore

This setup works well because the server is so simple so shutting down the server with a cut to the power is good enough. I still want to figure out a better solution to this but it isn't a top priority.

## Lessons Learned

1. Set up the folder structure before you have hundreds of GB in the wrong layout
2. Make plans for what you actually want to do with the hardware so you don't end up over or under designing
3. Using old hardware is perfectly acceptable when the use case allows for it

## What's Next

This project got me interested in learning more networking and Linux. I started with a dual boot setup now for my personal computer to use Ubuntu and Windows at the same time. For now I haven't had any issues with daily driving Ubuntu 26.04 lts on my main computer.