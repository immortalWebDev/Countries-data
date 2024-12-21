# Countries API Project

A web application that provides information about countries worldwide using the REST Countries API. Users can search for countries, view details like population, region, and capital, and filter results based on their queries. The application features a clean UI and falls back to cached data if the API fails.

---

## 🚀 Features

- Fetches data from [REST Countries API](https://restcountries.com/).
- Search functionality to find countries by name or region.
- Displays detailed information for each country, including flag, population, region, and capital.
- Fallback mechanism using cached data in case of API fetch failure.
- Smooth transitions and responsive design.

---

## 📂 Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── CountryCard.js
│   │   ├── CountriesList.js
│   │   └── CountriesListShimmer.js
│   ├── assets/
│   ├── App.js
│   ├── index.js
│   └── countriesData.js (fallback data)
├── .env
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

- **Frontend**: React.js
- **Bundler**: Parcel
- **Styling**: CSS Vanilla
- **API**: [REST Countries API](https://restcountries.com/)
- **Deployment**: [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)

---

## ⚙️ Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A package manager like npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/countries-api-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd countries-api-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and add your API base URL:

   ```env
   REACT_APP_BASE_URL=https://restcountries.com/v3.1
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open the app in your browser at [http://localhost:1234](http://localhost:1234).

---

## 🌐 Live Demo

Check out the deployed project:

- Vercel: [Countries Data](https://countries-data-piyush.vercel.app/)
- Netlify: [Nations Data](https://nations-data-piyush.netlify.app/)

---

## 📖 Usage

1. Type a country name or region in the search bar.
2. View country details, including flag, population, region, and capital.
3. If the API fails, cached data is loaded automatically.

---

## 🐛 Troubleshooting

### Common Issues

1. **API Fetch Failure:**

   - Ensure the base URL in `.env` is correct.
   - Check if the API is reachable by visiting it directly in your browser.

2. **CORS Issues:**

   - If you face CORS, Use a proxy or configure the server to accept requests from your deployed domain.
   - If API fetching fails sometimes, Do not worry I have implemented fallback. 

3. **Deployment Issues:**
   - Verify environment variables are set correctly in your deployment platform (e.g., Vercel or Netlify).

---

## 🤝 Contribution

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make changes and commit them:
   ```bash
   git commit -m "Added a new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 💡 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing the data.
- [React.js](https://reactjs.org/) for the framework.
- Inspiration from frontend-mentor projects showcasing country data.

---

## 📬 Contact

For any queries or feedback, feel free to reach out:

- Email: pgbadgujar007@gmail.com
- LinkedIn: [immortalwebdev](https://www.linkedin.com/in/immortalwebdev/)
- PortFolio: [My-Portfolio](https://www.snapit.tech/pgbadgujar007/5w3jtzcp1e)

---

Thank you for checking out this project! 🙌

Created with 💝 by Piyush
