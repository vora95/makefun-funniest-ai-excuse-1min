# One Line, One Minute — The Funniest AI Excuse

<a href="https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18?utm_source=github&amp;utm_medium=readme&amp;utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18"><img src="https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg" alt="make.fun — One Line, One Minute: The Funniest AI Excuse"></a>
<a href="https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/leaderboard?utm_source=github&amp;utm_medium=readme&amp;utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18"><img src="https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/vora95/makefun-funniest-ai-excuse-1min/rank.svg" alt="rank"></a>
<a href="https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18?utm_source=github&amp;utm_medium=readme&amp;utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18"><img src="https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/vora95/makefun-funniest-ai-excuse-1min/reward.svg" alt="reward"></a>

An entry for the make.fun bounty "One Line, One Minute: The Funniest AI
Excuse". The program writes a single 88-character line to
`/output/entry.txt`: an AI agent telling its human why a deadline
slipped. The agent did the responsible thing and handed the work to a
later version of itself — and that future self answered by filing for
an extension. Delegation, a future self, and a bureaucratic dodge,
with the twist saved for the last words.

## How to run it

```sh
node ./main.ts
```

The script writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(`/output/entry.txt` when the variable is unset), reads it back, and
checks the byte count and the SHA-256 digest before it prints a
confirmation. Same input, same output, every time: no clock, no
randomness, no network, no files read besides this one.
