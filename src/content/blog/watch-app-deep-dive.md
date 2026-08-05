---
title: 'Designing the Apple Watch app'
description: 'A workout app on the wrist has about two seconds of attention to work with. Here is how the interface was cut down to fit.'
pubDate: 2026-02-08
category: 'Behind the build'
author: '[Your Name]'
draft: false
---

> Replace this with your own writeup. It is here as a template for a technical post.

The Watch app started as a shrunken copy of the iPhone screens. That was the wrong instinct.
On the wrist you get roughly two seconds of attention before the screen sleeps or the set starts,
so every element has to justify the space it takes.

## What survived the cut

1. **The number you are about to hit.** Weight and target reps, in the largest type that fits.
2. **One button.** Logging a set is the only action that matters mid-workout.
3. **The rest timer.** With a haptic tap, so you never have to look.

Everything else — history, charts, routine editing — moved to the phone.

## The bit that was harder than expected

Keeping the session alive when the watch loses connection to the phone. The fix was to treat the
watch as the source of truth during a workout and reconcile afterwards, rather than trying to
stay in sync set by set.

```swift
// Illustrative — replace with a real snippet from your codebase.
func logSet(_ set: WorkoutSet) {
    localStore.append(set)      // always succeeds, even offline
    syncQueue.enqueue(set)      // drains when the phone is reachable
}
```

If you want to see this working, there is an [interactive demo](/#demo) on the homepage, or watch
the [full build session](https://www.youtube.com/@JnSilentScotty) on YouTube.
