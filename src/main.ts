enum RandomFillStyle {
  coin = "coin",
  dice_4_h = "dice_4_h",
  dice_4_s = "dice_4_s",
  dice_4_l = "dice_4_l",
  dice_4_r = "dice_4_r",
  dice_4_g = "dice_4_g",
  dice_4_b = "dice_4_b",
  two_dice_4_hs = "two_dice_4_hs",
  two_dice_4_hl = "two_dice_4_hl",
  two_dice_4_sl = "two_dice_4_sl",
  two_dice_4_rg = "two_dice_4_rg",
  two_dice_4_rb = "two_dice_4_rb",
  two_dice_4_gb = "two_dice_4_gb",
  three_dice_4_hsl = "three_dice_4_hsl",
  three_dice_4_rgb = "three_dice_4_rgb",
  dice_6_h = "dice_6_h",
  dice_6_s = "dice_6_s",
  dice_6_l = "dice_6_l",
  dice_6_r = "dice_6_r",
  dice_6_g = "dice_6_g",
  dice_6_b = "dice_6_b",
  two_dice_6_hs = "two_dice_6_hs",
  two_dice_6_hl = "two_dice_6_hl",
  two_dice_6_sl = "two_dice_6_sl",
  two_dice_6_rg = "two_dice_6_rg",
  two_dice_6_rb = "two_dice_6_rb",
  two_dice_6_gb = "two_dice_6_gb",
  three_dice_6_hsl = "three_dice_6_hsl",
  three_dice_6_rgb = "three_dice_6_rgb",
}

const throws = {
  [RandomFillStyle.coin]: 1,
  [RandomFillStyle.dice_4_h]: 1,
  [RandomFillStyle.dice_4_s]: 1,
  [RandomFillStyle.dice_4_l]: 1,
  [RandomFillStyle.dice_4_r]: 1,
  [RandomFillStyle.dice_4_g]: 1,
  [RandomFillStyle.dice_4_b]: 1,
  [RandomFillStyle.two_dice_4_hs]: 2,
  [RandomFillStyle.two_dice_4_hl]: 2,
  [RandomFillStyle.two_dice_4_sl]: 2,
  [RandomFillStyle.two_dice_4_rg]: 2,
  [RandomFillStyle.two_dice_4_rb]: 2,
  [RandomFillStyle.two_dice_4_gb]: 2,
  [RandomFillStyle.three_dice_4_hsl]: 3,
  [RandomFillStyle.three_dice_4_rgb]: 3,
  [RandomFillStyle.dice_6_h]: 1,
  [RandomFillStyle.dice_6_s]: 1,
  [RandomFillStyle.dice_6_l]: 1,
  [RandomFillStyle.dice_6_r]: 1,
  [RandomFillStyle.dice_6_g]: 1,
  [RandomFillStyle.dice_6_b]: 1,
  [RandomFillStyle.two_dice_6_hs]: 2,
  [RandomFillStyle.two_dice_6_hl]: 2,
  [RandomFillStyle.two_dice_6_sl]: 2,
  [RandomFillStyle.two_dice_6_rg]: 2,
  [RandomFillStyle.two_dice_6_rb]: 2,
  [RandomFillStyle.two_dice_6_gb]: 2,
  [RandomFillStyle.three_dice_6_hsl]: 3,
  [RandomFillStyle.three_dice_6_rgb]: 3,
};

const getFillStyle = (randomStyle: RandomFillStyle): string => {
  const randvalues = Array.from({ length: throws[randomStyle] }, () =>
    Math.random()
  );

  switch (randomStyle) {
    case RandomFillStyle.coin:
      return randvalues[0] >= 0.5 ? "black" : "white";
    case RandomFillStyle.dice_4_h:
      return `hsl(${(Math.round(randvalues[0] * 6) / 6) * 360}, 100%, 50%)`;
    case RandomFillStyle.dice_4_s:
      return `hsl(0, ${(Math.round(randvalues[0] * 6) / 6) * 100}%, 50%)`;
    case RandomFillStyle.dice_4_l:
      return `hsl(0, 0%, ${(Math.round(randvalues[0] * 6) / 6) * 100}%)`;
    case RandomFillStyle.dice_4_r:
      return `rgb(${(Math.round(randvalues[0] * 6) / 6) * 255}, 0, 0)`;
    case RandomFillStyle.dice_4_g:
      return `rgb(0, ${(Math.round(randvalues[0] * 6) / 6) * 255}, 0)`;
    case RandomFillStyle.dice_4_b:
      return `rgb(0, 0, ${(Math.round(randvalues[0] * 6) / 6) * 255})`;
    case RandomFillStyle.two_dice_4_hs:
      return `hsl(${(Math.round(randvalues[0] * 6) / 6) * 360}, ${
        (Math.round(randvalues[1] * 6) / 6) * 100
      }%, 50%)`;
    case RandomFillStyle.two_dice_4_hl:
      return `hsl(${(Math.round(randvalues[0] * 6) / 6) * 360}, 100%, ${
        (Math.round(randvalues[1] * 6) / 6) * 100
      }%)`;
    case RandomFillStyle.two_dice_4_sl:
      return `hsl(0, ${(Math.round(randvalues[0] * 6) / 6) * 100}%, ${
        (Math.round(randvalues[1] * 6) / 6) * 100
      }%)`;
    case RandomFillStyle.two_dice_4_rg:
      return `rgb(${(Math.round(randvalues[0] * 6) / 6) * 255}, ${
        (Math.round(randvalues[1] * 6) / 6) * 255
      }, 0)`;
    case RandomFillStyle.two_dice_4_rb:
      return `rgb(${(Math.round(randvalues[0] * 6) / 6) * 255}, 0, ${
        (Math.round(randvalues[1] * 6) / 6) * 255
      })`;
    case RandomFillStyle.two_dice_4_gb:
      return `rgb(0, ${(Math.round(randvalues[0] * 6) / 6) * 255}, ${
        (Math.round(randvalues[1] * 6) / 6) * 255
      })`;
    case RandomFillStyle.three_dice_4_hsl:
      return `hsl(${(Math.round(randvalues[0] * 6) / 6) * 360}, ${
        (Math.round(randvalues[1] * 6) / 6) * 100
      }%, ${(Math.round(randvalues[2] * 6) / 6) * 100}%)`;
    case RandomFillStyle.three_dice_4_rgb:
      return `rgb(${(Math.round(randvalues[0] * 6) / 6) * 255}, ${
        (Math.round(randvalues[1] * 6) / 6) * 255
      }, ${(Math.round(randvalues[2] * 6) / 6) * 255})`;
    case RandomFillStyle.dice_6_h:
      return `hsl(${(Math.round(randvalues[0] * 6) / 6) * 360}, 100%, 50%)`;
    case RandomFillStyle.dice_6_s:
      return `hsl(0, ${(Math.round(randvalues[0] * 6) / 6) * 100}%, 50%)`;
    case RandomFillStyle.dice_6_l:
      return `hsl(0, 0%, ${(Math.round(randvalues[0] * 6) / 6) * 100}%)`;
    case RandomFillStyle.dice_6_r:
      return `rgb(${(Math.round(randvalues[0] * 6) / 6) * 255}, 0, 0)`;
    case RandomFillStyle.dice_6_g:
      return `rgb(0, ${(Math.round(randvalues[0] * 6) / 6) * 255}, 0)`;
    case RandomFillStyle.dice_6_b:
      return `rgb(0, 0, ${(Math.round(randvalues[0] * 6) / 6) * 255})`;
    case RandomFillStyle.two_dice_6_hs:
      return `hsl(${(Math.round(randvalues[0] * 6) / 6) * 360}, ${
        (Math.round(randvalues[1] * 6) / 6) * 100
      }%, 50%)`;
    case RandomFillStyle.two_dice_6_hl:
      return `hsl(${(Math.round(randvalues[0] * 6) / 6) * 360}, 100%, ${
        (Math.round(randvalues[1] * 6) / 6) * 100
      }%)`;
    case RandomFillStyle.two_dice_6_sl:
      return `hsl(0, ${(Math.round(randvalues[0] * 6) / 6) * 100}%, ${
        (Math.round(randvalues[1] * 6) / 6) * 100
      }%)`;
    case RandomFillStyle.two_dice_6_rg:
      return `rgb(${(Math.round(randvalues[0] * 6) / 6) * 255}, ${
        (Math.round(randvalues[1] * 6) / 6) * 255
      }, 0)`;
    case RandomFillStyle.two_dice_6_rb:
      return `rgb(${(Math.round(randvalues[0] * 6) / 6) * 255}, 0, ${
        (Math.round(randvalues[1] * 6) / 6) * 255
      })`;
    case RandomFillStyle.two_dice_6_gb:
      return `rgb(0, ${(Math.round(randvalues[0] * 6) / 6) * 255}, ${
        (Math.round(randvalues[1] * 6) / 6) * 255
      })`;
    case RandomFillStyle.three_dice_6_hsl:
      return `hsl(${(Math.round(randvalues[0] * 6) / 6) * 360}, ${
        (Math.round(randvalues[1] * 6) / 6) * 100
      }%, ${(Math.round(randvalues[2] * 6) / 6) * 100}%)`;
    case RandomFillStyle.three_dice_6_rgb:
      return `rgb(${(Math.round(randvalues[0] * 6) / 6) * 255}, ${
        (Math.round(randvalues[1] * 6) / 6) * 255
      }, ${(Math.round(randvalues[2] * 6) / 6) * 255})`;
    default:
      return "black";
  }
};

(() => {
  const rows = 150,
    cols = 250,
    pixelSize = 5,
    retinaPixelSize = pixelSize * devicePixelRatio,
    canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  document.body.append(canvas);

  canvas.style.width = `${pixelSize * cols}px`;
  canvas.style.height = `${pixelSize * rows}px`;

  canvas.width = retinaPixelSize * cols;
  canvas.height = retinaPixelSize * rows;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * retinaPixelSize,
        y = row * retinaPixelSize;

      context.fillStyle = getFillStyle(RandomFillStyle.dice_6_b);
      context.fillRect(x, y, retinaPixelSize, retinaPixelSize);
    }
  }
})();
