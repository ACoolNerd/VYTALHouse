---
version: "alpha"
name: VYTAL Spacecraft Lounge
description: Design system for VYTAL House, a premium Columbia, Maryland recovery and wellness club.
colors:
  primary: "#C8A46B"
  on-primary: "#07090D"
  secondary: "#7DE3FF"
  tertiary: "#6EE7B7"
  background: "#07090D"
  on-background: "#FFFFFF"
  surface: "#111722"
  surface-bright: "#18202D"
  surface-container: "#222B3D"
  cream: "#F6F0E6"
  error: "#F15F5F"
typography:
  display-lg:
    fontFamily: Aptos Display
    fontSize: 64px
    fontWeight: "700"
    lineHeight: "1.05"
    letterSpacing: "0"
  headline-lg:
    fontFamily: Aptos Display
    fontSize: 40px
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: "0"
  headline-md:
    fontFamily: Aptos
    fontSize: 24px
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: "0"
  body-lg:
    fontFamily: Aptos
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.7"
    letterSpacing: "0"
  body-md:
    fontFamily: Aptos
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: "0"
  label-caps:
    fontFamily: Aptos
    fontSize: 12px
    fontWeight: "700"
    lineHeight: "1"
    letterSpacing: "0.14em"
rounded:
  sm: 6px
  md: 8px
  lg: 8px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.cream}"
    rounded: "{rounded.full}"
    padding: 12px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.cream}"
    rounded: "{rounded.md}"
    padding: 20px
  command-panel:
    backgroundColor: "{colors.surface-bright}"
    textColor: "{colors.on-background}"
    rounded: "{rounded.md}"
    padding: 24px
---

## Overview

VYTAL House uses a dark spacecraft-lounge aesthetic: quiet black surfaces, chrome-adjacent contrast, warm gold controls, clinical cyan highlights, and crisp white typography. The experience should feel premium, controlled, and operational rather than decorative.

## Colors

- **Background (#07090D):** Primary page atmosphere.
- **Surface (#111722):** Cards, tables, panels, and portal rows.
- **Surface Bright (#18202D):** Elevated panels and command dashboard sections.
- **Primary Gold (#C8A46B):** Brand signal, CTAs, key metrics, and labels.
- **Secondary Cyan (#7DE3FF):** System status, active role states, and clinical technology accents.
- **Cream (#F6F0E6):** Long-form body text on dark surfaces.
- **Error (#F15F5F):** Blocking states, not decoration.

## Typography

Use strong display headlines for brand moments and compact body text for operational dashboards. Letter spacing must stay at `0` for normal text. Caps labels may use positive tracking only.

## Layout & Spacing

Screens should be full-width dark environments with constrained content regions. Use cards for repeated records, modals, and framed tools. Avoid nested cards and oversized rounded corners. Mobile layouts must stack without horizontal overflow.

## Elevation & Depth

Depth should come from subtle borders, gradients, and dark panel contrast. Avoid colorful blobs, purple-heavy gradients, beige themes, or decorative noise that distracts from facility, portal, and launch readiness information.

## Shapes

Cards and panels use 8px radius. Pills and controls use full radius. Tables and record rows stay dense, readable, and governed.

## Components

- **Primary buttons:** gold fill with black text.
- **Secondary buttons:** dark fill with cream text and soft border.
- **Cards:** dark panel, 8px radius, restrained shadow.
- **Record rows:** table-like operational density with status on the right.
- **Portal panels:** wide dark panels with role and project-readiness metadata.

## Do's and Don'ts

- Do show the target location, portal, dashboards, and artifacts clearly.
- Do maintain VYTAL-only naming, color, and operating logic.
- Do keep legal, medical, financial, and payment claims marked as draft or gated.
- Do not import unrelated venture language, colors, slogans, or operating models.
- Do not create live external resources from design or README instructions.
