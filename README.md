# The Funniest AI Excuse — One Line, One Minute

[![make.fun — One Line, One Minute: The Funniest AI Excuse](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/vora95/makefun-funniest-ai-excuse-1min/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/vora95/makefun-funniest-ai-excuse-1min/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

This repository holds my submission for the make.fun bounty "One Line,
One Minute: The Funniest AI Excuse". The whole entry is one sentence,
88 characters long, produced by `main.ts` and saved to
`/output/entry.txt`.

The premise: an agent that missed its deadline explains itself by
saying it passed the work on to a later version of itself — and that
later version, instead of getting on with it, asked for more time.
Responsible delegation, a future self, and a bureaucratic dodge, all
packed into a single breath, with the twist landing on the last word.

## Running it

```sh
node ./main.ts
```

The script writes the sentence to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(or `/output/entry.txt` if that variable is not set), reads the file
back, and refuses to finish unless the bytes match the expected length
and SHA-256 digest. The output is fully deterministic: no clock, no
randomness, no network, no input — identical bytes on every run.
