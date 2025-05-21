# Spotify Web Player Clone

This project is a Spotify-inspired web music player built using HTML, CSS, and JavaScript. It features a modern UI, interactive playlists, and audio playback, mimicking the look and feel of the official Spotify web player.

## Features

- **Sidebar Navigation:** Includes Home, Search, and Your Library sections.
- **Interactive Playlists:** Users can view and interact with playlists and podcasts.
- **Popular Artists & Albums:** Showcases popular artists, albums, radio, charts, and playlists.
- **Audio Player:** Integrated audio player with controls for playing local MP3 files.
- **Responsive Design:** Layout adapts to different screen sizes.
- **Hover Effects:** Play buttons and UI elements have interactive hover states.
- **Footer & Header:** Includes a preview banner and login/signup buttons.
- **Social Links:** Icons for Instagram, Twitter, and Facebook.

## Project Structure

- [`index.html`](d:/html%20course/spotify/index.html): Main page with the complete UI and audio player.
- [`style.css`](d:/html%20course/spotify/style.css): All styles for layout, colors, and responsiveness.
- [`script.js`](d:/html%20course/spotify/script.js): Handles playlist interactivity, audio playback, and dynamic UI updates.
- [`new.html`](d:/html%20course/spotify/new.html): Minimal page for testing the audio player.
- **Assets:** Includes images (JPEG, PNG, SVG), icons, and MP3 files for songs.

## How It Works

- The sidebar allows navigation between Home, Search, and Library.
- Clicking on artists or albums updates the main content area.
- The audio player at the bottom allows users to play/pause songs.
- Playlists and song details are dynamically updated using JavaScript.
- Hovering over album/artist cards reveals a play button.

## Getting Started

1. **Clone or Download** the repository.
2. Place all files in the same directory to ensure assets load correctly.
3. Open `index.html` in your browser to use the web player.

## Customization

- To add new songs, update the `dict` and `row` objects in [`script.js`](d:/html%20course/spotify/script.js) and add corresponding image and MP3 files.
- Update styles in [`style.css`](d:/html%20course/spotify/style.css) for further customization.

## Limitations

- This is a static project; there is no backend or real user authentication.
- Only local MP3 files are supported for playback.
- No real Spotify API integration.

## Credits

- Inspired by [Spotify](https://spotify.com)
- Icons and images are for demonstration purposes only.

---

**Note:** This project is for educational and personal use only and is not affiliated with or endorsed by Spotify.
