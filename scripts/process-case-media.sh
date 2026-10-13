#!/bin/bash
# Stage the "Creative Assets" (Heyfood / Pricepally / Sendme / Koyn) for the
# case-study pages: crop brand logos, compress videos, resize statics.
# Requires: node_modules/ffmpeg-static + ffprobe-static (npm i --no-save).
set -euo pipefail
cd "$(dirname "$0")/.."

FF="node_modules/ffmpeg-static/ffmpeg"
SRC=" assets/Creative Assets"
VID="public/media/video"
IMG="public/media/img"
mkdir -p "$VID" "$IMG"

# encode <srcfile> <name> [max-seconds] — portrait capped 640w, landscape 960w
encode() {
  local src="$1" name="$2" maxsec="${3:-0}"
  local trim=()
  [ "$maxsec" != "0" ] && trim=(-t "$maxsec")
  "$FF" -y -v error "${trim[@]+"${trim[@]}"}" -i "$src" \
    -vf "scale=w='if(gt(iw,ih),960,-2)':h='if(gt(iw,ih),-2,1138)':force_original_aspect_ratio=decrease:force_divisible_by=2:flags=lanczos,fps=30" \
    -c:v libx264 -preset veryfast -crf 29 -c:a aac -b:a 64k -movflags +faststart \
    "$VID/$name.mp4" && echo "OK  $name.mp4"
}

# image <srcfile> <name> — resize longest edge to 1000px, JPEG q78
image() {
  local src="$1" name="$2"
  sips -s format jpeg -s formatOptions 78 --resampleWidth 1000 "$src" --out "$IMG/$name.jpg" >/dev/null 2>&1 \
    && echo "OK  $name.jpg"
}

# logo <srcfile> <name> <w> <h> <x> <y> [ss] — crop a region out of a still/video
logo() {
  local src="$1" name="$2" w="$3" h="$4" x="$5" y="$6" ss="${7:-}"
  local in=()
  [ -n "$ss" ] && in=(-ss "$ss")
  "$FF" -y -v error "${in[@]+"${in[@]}"}" -i "$src" -frames:v 1 \
    -vf "crop=$w:$h:$x:$y" -update 1 "$IMG/$name.png" && echo "OK  $name.png"
}

# ── Logos (cropped from brand statics / video end-cards) ───────────────────
logo "$SRC/Pricepally/1.png"                          logo-pricepally 380 160 20 940
logo "$SRC/Heyfood/2. Heyfood video ad 1.mp4"         logo-heyfood    760 230 580 390 43.6
logo "$SRC/Koyn/Koyn_Koyn pays you_snap.jpg"          logo-koyn       330 140 120 1655
logo "$SRC/Sendme/83a5bd69-87cf-4c5e-910a-19219f9d5e98.jpg" logo-sendme 280 150 10 930

# ── Videos ─────────────────────────────────────────────────────────────────
encode "$SRC/Heyfood/2. Heyfood video ad 1.mp4" case-heyfood-ad1 45
encode "$SRC/Heyfood/Heyfood ad.MP4"            case-heyfood-ad2 26
encode "$SRC/Koyn/Koyn ad6.mp4"                 case-koyn-ad1    30
encode "$SRC/Koyn/Koyn ad7.mp4"                 case-koyn-ad2    30
encode "$SRC/Koyn/Koyn ad5.mp4"                 case-koyn-ad3    30
encode "$SRC/Sendme/Cooknchill6.mp4"            case-sendme-ad1  34

# ── Statics ────────────────────────────────────────────────────────────────
image "$SRC/Pricepally/1.png"                                case-pricepally-1
image "$SRC/Pricepally/2.jpg"                                case-pricepally-2
image "$SRC/Pricepally/Artboard 2.png"                       case-pricepally-3
image "$SRC/Pricepally/Stew Bundle 1080_1920_PricePally.jpg" case-pricepally-4
image "$SRC/Koyn/Koyn_Koyn pays you_snap.jpg"                case-koyn-static-1
image "$SRC/Koyn/Koyn_Cash out crypto in seconds_snap.jpg"   case-koyn-static-2
image "$SRC/Koyn/Koyn_Swap crypto. Sell crypto_Story.jpg"    case-koyn-static-3
image "$SRC/Sendme/83a5bd69-87cf-4c5e-910a-19219f9d5e98.jpg" case-sendme-static-1
image "$SRC/Sendme/08b923fa-ee77-4c3e-ab12-3f5c36721f48.jpg" case-sendme-static-2
image "$SRC/Sendme/bd7bb780-f17f-42c5-a7b2-af59c2628b20.jpg" case-sendme-static-3
image "$SRC/Sendme/43DACFFD-5A9B-4C0E-A5FD-58951D157FE9.jpg" case-sendme-static-4

echo "— done —"
du -sh public/media
