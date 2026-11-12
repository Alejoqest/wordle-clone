# Wordle Clone

This a clone of the web game Wordle made by [Alejoqest](https://github.com/Alejoqest).

## Table of Contents

- [Wordle Clone](#wordle-clone)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Build with](#build-with)
  - [Features](#features)
  - [Set Up](#set-up)
    - [Installation](#installation)
  - [Thank you for reading!](#thank-you-for-reading)

## Overview

This a clone of wordle made in React. It has all the basic operations that wordle has.

### Build with:

- React JS + TypeScript.
- Tailwind CSS.

## Features

- **Inputing letters** via clicking the keyboard.
- **Backspace key** (`<=`) to erase the last inputed letter.
- The **Enter key** can only be pressed once 5 letters are inputed. Before submitting, the guess has to pass a simple validation check:
  - **Not be the same letter** 5 times.
  - Have at least a **single vowel sounding letter** (`a`, `e`, `i`, `o`, `u` or `y` ).
- The **inputed guess gets compared with word** for correct guesses. A letter can be `unused`, `absent`, `present` and `correct`.
- After a guess, the **keyboard gets updated** with letters guesses.
- Has a **maximun of 6 times to guess the word**, if not, the game ends.
- After the game ends, there's a option to **start another one**.
- There's **two buttons in the header**:
  - One opens a dialog that allows to **change the theme** between light or dark in the application.
  - Another opens a dialog shows **how to play wordle**.
- Bellow the header **messages are displayed for feedback**. The messages can be:
  - **Failing a validation** check.
  - Trying to make a **incomplete guess**.
  - **Winning** the game.
  - **Losing** the game.

## Set up

If you want to fork this project.

### Installation

1. Clone the repository.

   ```bash
   git clone https://github.com/Alejoqest/wordle-clone.git
   ```

2. Navigate to the folder.

   ```bash
   cd wordle-clone
   ```

3. Start the app.

   ```bash
   npm run dev
   ```

## Thank you for reading!

I hope this project is useful to anyone who uses it or enjoys tinkering with the code. If you any sort of question or suggestion to make, please contact [me](https://github.com/Alejoqest).

Have a nice day!

-- A
