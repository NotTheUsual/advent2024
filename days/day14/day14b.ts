import day14Input from './day14.input';

type Point = { x: number; y: number };
type Velocity = Point;

const parseInput = (input: string): Array<{ point: Point; velocity: Velocity }> => {
  return input.split('\n').map((line) => {
    // biome-ignore lint/style/noNonNullAssertion: It's fine
    const [, pointX, pointY, velocityX, velocityY] = line.match(/p=(.+),(.+) v=(.+),(.+)/)!;
    return {
      point: { x: Number.parseInt(pointX), y: Number.parseInt(pointY) },
      velocity: { x: Number.parseInt(velocityX), y: Number.parseInt(velocityY) }
    };
  });
};

const server = Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    const isTest = url.pathname === '/test';

    const width = isTest ? 11 : 101;
    const height = isTest ? 7 : 103;
    const input = isTest
      ? `p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3`
      : day14Input;
    const bots = parseInput(input);

    const page = `<!DOCTYPE html>
<html>
  <head>
    <title>I can't believe I'm doing this</title>
    <style>
      body {
        font-family: -apple-system, sans-serif;
        font-size: 100%;
        text-align: center;
      }

      .grid {
        display: flex;
        flex-direction: column;
        gap: 1px;
        margin-bottom: 2rem;
        margin-inline: auto;
      }

      .row {
        display: flex;
        gap: 1px;
        margin-inline: auto;
      }

      .cell {
        background-color: #ddd;
        display: block;
        height: ${isTest ? '10px': '3px'};
        width: ${isTest ? '10px': '3px'};
      }
      .cell.active {
        background: green;
      }

      .range-wrapper {
        margin-top: 1rem;
      }

      #slider {
        width: ${isTest ? '25vw': '403px'};
      }
    </style>
  </head>
  <body>
    <h1>Day 14</h1>
    <div class="grid">
      ${[...new Array(height)]
        .map((_, y) => {
          return `<div class="row">
  ${[...new Array(width)]
    .map((__, x) => {
      return `<div class="cell" id="${x},${y}"></div>`;
    })
    .join('')}
</div>
`;
        })
        .join('\n')}
    </div>

    <div class="range-wrapper=">
      <input type="range" name="slider" id="slider" min="0" max="${20_000}" value="0" />
      <p id="slider-value">0</p>
    </div>

    <script>
      (() => {
        let iterations = 0;
        const gridDimensions = { width: ${width}, height: ${height} };
        const slider = document.getElementById('slider');
        const sliderValue = document.getElementById('slider-value');
        const botDefinitions = ${JSON.stringify(bots)};;
        let bots = ${JSON.stringify(bots.map((bot) => bot.point))};

        const runTheNumbers = () => {
          return botDefinitions.map((bot) => {
            const furthestX = bot.point.x + bot.velocity.x * iterations;
            const furthestY = bot.point.y + bot.velocity.y * iterations;
            return {
              x: (gridDimensions.width + (furthestX % gridDimensions.width)) % gridDimensions.width,
              y: (gridDimensions.height + (furthestY % gridDimensions.height)) % gridDimensions.height
            };
          });
        };

        function updateUI() {
          sliderValue.innerText = iterations;

          document.querySelectorAll('.cell').forEach(cell => {
            cell.classList = 'cell';
          });

          for (const bot of bots) {
            const targetCell = document.getElementById(\`\${bot.x},\${bot.y}\`);
            if (targetCell) {
              targetCell.classList.add('active')
            }
          }
        }

        updateUI();
  
        slider.addEventListener('input', (event) => {
          iterations = event.target.value;
          bots = runTheNumbers();
          updateUI();
        });
      })()
    </script>
  </body>
`;

    return new Response(page, {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  }
});

console.log(`Listening on ${server.url}`);
