# One Line, One Laugh

[![make.fun](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/androyesfernandez/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/androyesfernandez/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

A one-line joke for the [One Line, One Laugh](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea) competition on make.fun.

## What it does

`main.ts` holds a single joke as one string constant, checks it against the
competition gate (1–200 characters, exactly one line, not only whitespace, no
carriage returns or control characters), then writes it — plus one trailing
newline — to `/output/entry.txt` as UTF-8. After writing, it reads the file
back and exits non-zero unless the bytes are byte-identical to the line plus
the trailing newline.

The joke: a dentist's flossing lecture turns into a confession of sins not
yet committed — just in case, with the mouth still open.

## Run

Requires Node 22. No dependencies, no network access.

```sh
node main.ts
```

Output: `/output/entry.txt` — one line, 185 characters.
