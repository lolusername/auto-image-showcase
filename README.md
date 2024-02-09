# Photos Portfolio Project

This project showcases a photo portfolio as a web application. It is built using modern web technologies and designed to be responsive and accessible. The core feature of the application is its ability to generate and display images with their aspect ratios and provide an engaging layout for users.

## Features

- Responsive Image Display: Images are displayed responsively, adapting to different screen sizes and orientations.
- Aspect Ratio Calculation: Each image's aspect ratio is calculated and used to determine the layout, ensuring a consistent and aesthetically pleasing experience.
- Image Data Generation: A script is available to generate JSON data for all photos, which includes their aspect ratios.

## Getting Started

To get started with the project, you'll need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. If you prefer [Yarn](https://yarnpkg.com/), you can use that as well.

1. Clone the repository:

git clone https://github.com/your-username/photos-portfolio.git

2. Navigate to the project directory:

cd photos-portfolio

3. Install dependencies:

npm install

or if you're using Yarn:

yarn install

## Usage

### Development

To start the development server, run:

npm run dev

or with Yarn:

yarn dev

This will launch the Vite dev server and you can view the application in your browser at `http://localhost:3000`.

### Building

To create a production build, run:

npm run build

or with Yarn:

yarn build

The production-ready files will be generated in the `dist/` directory.

### Previewing the Build

You can preview the production build locally using:

npm run preview

or with Yarn:

yarn preview

### Generating Image Data

The project includes a script that generates a JSON file containing metadata for the images. This metadata includes the aspect ratio of each image, which is used for layout purposes. You can run this script using:

npm run generate-image-data

or with Yarn:

yarn generate-image-data

Running this script will execute `photo-script.js` and create or update the `photos.json` file in the `src/assets` directory.

## Technical Details

The application is built using the following technologies:

- Svelte: A modern component-based JavaScript framework for building user interfaces.
- Vite: A build tool that provides a fast development environment and optimized builds.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- sharp: A Node.js module for image processing.
  
## Accessibility

We aim to ensure that the website is accessible to a wide range of users, including those with disabilities. The images come with appropriate `alt` tags, and the layout is designed to be navigable via keyboard and screen readers.

## Contribution

Contributions are welcome! If you have any suggestions or improvements, feel free to fork the repository and submit a pull request.

---

We hope you enjoy using the Photos Portfolio Project for your photo showcasing needs!