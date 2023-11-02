# Mobile Notes App

This is a mobile notes app project built with [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), [React](https://reactjs.org/), [React-hot-toast](https://react-hot-toast.com/), [React-icons](https://react-icons.github.io/), and more. This app is designed primarily for mobile screens but also provides a simulation of a mobile app experience for desktop users.

## Features

### 1. Adding Notes

Easily create and add new notes to your collection. Simply type your note content and click the "Add" button.

### 2. Deleting Notes

You can delete unwanted notes by clicking the delete button for each note. A confirmation modal will ensure that you don't accidentally delete a note.

### 3. Random Background Colors

Each note comes with a unique and random background color for a visually appealing experience.

### 4. Read-Only Mode

You can view your notes in read-only mode, preventing accidental edits while allowing you to review your notes.

### 5. Delete Confirmation Modal

To prevent accidental note deletions, a confirmation modal will appear when you attempt to delete a note.

### 6. About Modal

Get more information about the app and its creators by clicking the "About" button.

### 7. Debounce Search Functionality

Efficiently search for specific notes with the debounce search functionality. The app ensures smooth and responsive search results.

### 8. Local Storage

Your notes are stored in local storage, ensuring that your notes persist across page refreshes and preventing data loss.

### 9. Validation

- Proper toast notifications will show if you leave the note title empty, ensuring that you provide a title for each note.

### Error Handling

- If a note is not found during the search, the app provides error handling to notify you.
- If your notes page is empty, you will receive user-friendly feedback.

## Installation

1. Clone the repository.

   ```shell
   git clone https://github.com/yourusername/mobile-notes-app.git
   ```

2. Navigate to the project directory.

   ```shell
   cd mobile-notes-app
   ```

3. Install the dependencies using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

   ```shell
   npm install
   # or
   yarn install
   ```

4. Run the development server.

   ```shell
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and access the app at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [React-hot-toast](https://react-hot-toast.com/)
- [React-icons](https://react-icons.github.io/)

## Screenshots

![addNote](https://github.com/GhazalBasalighe/hw18_maktab99/assets/127536254/0195c375-563e-4125-9378-a28c2bfd30dd)
![deleteModal](https://github.com/GhazalBasalighe/hw18_maktab99/assets/127536254/80f27089-a6da-4b5c-ae2e-2108452c5942)
![landingPage](https://github.com/GhazalBasalighe/hw18_maktab99/assets/127536254/90eeb1fb-085e-45e2-bc22-9c92ff081685)
![notes](https://github.com/GhazalBasalighe/hw18_maktab99/assets/127536254/da75394c-699b-4433-afd3-aa4fb25fe5a1)
![searchLanding](https://github.com/GhazalBasalighe/hw18_maktab99/assets/127536254/a1222751-4931-4c13-91d5-9fb7fe7e0ee6)
![searchNotFound](https://github.com/GhazalBasalighe/hw18_maktab99/assets/127536254/8b446f1f-bb7b-4dfd-8ded-139de2dfcafb)
![searchResults](https://github.com/GhazalBasalighe/hw18_maktab99/assets/127536254/036e6626-7789-46c8-b403-4fe64a7956db)
![toastWarning](https://github.com/GhazalBasalighe/hw18_maktab99/assets/127536254/b4e4a590-d3c2-421d-adf2-3e3e7f07135c)

## Contributors

- [Ghazal Basalighe](https://github.com/GhazalBasalighe)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to contribute, open issues, or provide feedback. Enjoy taking notes on the go!
