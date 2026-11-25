# One Line, One Laugh

[![make.fun](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/androyesfernandez/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/androyesfernandez/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

A one-line joke for the make.fun competition "One Line, One Laugh".

The program holds a single 188-character joke line — a dentist visit that
turns into an unplanned confession — validates it against the competition
gate (1–200 characters, a single non-blank line, no control characters),
and writes it, plus one trailing newline, to `/output/entry.txt` as UTF-8.
After writing, it reads the file back and exits non-zero unless the bytes
are byte-identical to the line plus the trailing newline.

## Run

Requires Node 22. No dependencies, no network access.

```sh
node main.ts
```

The entry line is written to `/output/entry.txt`.
