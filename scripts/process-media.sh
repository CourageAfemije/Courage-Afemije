#!/bin/bash
# Stage Courage's real ad assets into public/media/ as web-ready files.
# Videos: H.264 30fps, capped at 640px (portrait) / 960px (landscape) long edge, CRF 29, faststart.
# Images: JPEG, max 1000px edge, quality 80.
set -u
cd "$(dirname "$0")/.."
FF=./node_modules/ffmpeg-static/ffmpeg
SRC=" assets"
OUT=public/media
mkdir -p "$OUT/video" "$OUT/img"

encode() { # encode <srcfile> <name> [max-seconds]
  local src="$SRC/$1" name="$2" tmax="${3:-}"
  local trim=()
  [ -n "$tmax" ] && trim=(-t "$tmax")
  "$FF" -y -v error "${trim[@]+"${trim[@]}"}" -i "$src" \
    -vf "scale=w='if(gt(iw,ih),960,-2)':h='if(gt(iw,ih),-2,1138)':force_original_aspect_ratio=decrease:flags=lanczos,fps=30" \
    -c:v libx264 -preset veryfast -crf 29 -profile:v high -pix_fmt yuv420p \
    -c:a aac -b:a 64k -movflags +faststart \
    "$OUT/video/$name.mp4" && echo "OK  video/$name.mp4" || echo "FAIL $1"
}

image() { # image <srcfile> <name>
  sips -s format jpeg -s formatOptions 78 -Z 1000 "$SRC/$1" --out "$OUT/img/$2.jpg" >/dev/null 2>&1 \
    && echo "OK  img/$2.jpg" || echo "FAIL $1"
}

frame() { # frame <srcfile> <time> <name> — grab one still from a video
  "$FF" -y -v error -ss "$2" -i "$SRC/$1" -frames:v 1 \
    -vf "scale=w='if(gt(iw,ih),960,-2)':h='if(gt(iw,ih),-2,1138)':force_original_aspect_ratio=decrease:flags=lanczos" \
    "$OUT/img/$3.jpg" >/dev/null 2>&1 && echo "OK  img/$3.jpg" || echo "FAIL frame $1"
}

# ---- Hero reel (portrait loops) ----
encode "Faith Cap.mp4" hero-faith-cap 15
encode "Conviction Sunglasses video.mp4" hero-conviction 8
encode "Grey Leopard Faith Belt Video.mp4" hero-grey-leopard 8
encode "God_s Timepiece Gold.mp4" hero-gods-timepiece 9
encode "Will I actually use it — Hook 1 (V1).mp4" hero-beauty-hook 24
encode "Voyee LuminX Pro.mp4" hero-voyee 20

# ---- Creative work grid ----
encode "BUCKLE BELT.mp4" work-buckle-belt
encode "UGC Video 2.mp4" work-street-dance 25
encode "UGC Video 4.mp4" work-belt-chat 17
encode "F 1.mp4" work-statics-motion 27
encode "F 4.mp4" work-grwm
encode "LuminX Pro Amz Video Ad - Long Form (1).mp4" work-luminx-ad 38
encode "houseofhayley.mp4" work-steamer-ugc 28
encode "heyitsjas24.mp4" work-steamer-ugc2 21
encode "LED MASK.mp4" work-led-mask 39
encode "Video 3- Facial Steamer .mp4" work-steamer-studio 9
encode "Facial Steamer.mp4" work-facial-steamer 26

# ---- Static ad creatives ----
image "about-img.png" headshot
image "1 4-5.png" static-complexcon
image "1 9-16.png" static-laborday
image "3 9-16 (1).png" static-combo
image "26 1-1.png" static-summersale
image "Built to endure seasons, styles, and everything….jpeg" static-enduring
image "17 9-16 (3).png" static-ai-cap
image "18 4-5.png" static-revenuelab
image "FaithByLuis Belt 4x5.png" product-belt
image "FaithByLuis Cap 4x5.png" product-cap
image "FaithByLuis Sunglasses 4x5.png" product-sunglasses
image "FaithByLuis Navigator Chrome 4x5.png" product-navigator

# ---- Service card stills (frames from UGC clips) ----
frame "UGC Video 5.mp4" 4 service-ugc-belt
frame "e2aeedee-727b-41fe-9b47-a06f7ce07bef.mp4" 20 service-beauty-ugc

echo "--- done ---"
du -sh "$OUT"
