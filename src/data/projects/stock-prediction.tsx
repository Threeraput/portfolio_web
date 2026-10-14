import type { ProjectData, ProjectMedia } from './types'

const screenshots: ProjectMedia[] = [
  {
    src: '/goldprice_regression/Screenshot%202026-10-13%20224709.png',
    alt: 'NASDAQ price growth from 2010 to 2024',
  },
  {
    src: '/goldprice_regression/Screenshot%202026-10-13%20224648.png',
    alt: 'S&P 500 price growth from 2010 to 2024',
  },
  {
    src: '/goldprice_regression/Screenshot%202026-10-13%20224658.png',
    alt: 'NASDAQ closing price and mean price over time',
  },
  {
    src: '/goldprice_regression/Screenshot%202026-10-13%20224828.png',
    alt: 'Growth rates of various financial assets',
  },
  {
    src: '/goldprice_regression/Screenshot%202026-10-13%20224753.png',
    alt: 'Correlation heatmap of financial assets',
  },
  {
    src: '/goldprice_regression/Screenshot%202026-10-13%20224842.png',
    alt: 'Scatter plot of financial asset clusters',
  },
  {
    src: '/goldprice_regression/Screenshot%202026-10-13%20224805.png',
    alt: 'Time-series cross-validation and regression model scores',
  },
  {
    src: '/goldprice_regression/Screenshot%202026-10-13%20221912.png',
    alt: 'Financial asset dataset preview',
  },
  {
    src: '/goldprice_regression/Screenshot%202026-10-13%20222720.png',
    alt: 'Financial time-series data preparation',
  },
  {
    src: '/goldprice_regression/Screenshot%202026-10-13%20224606.png',
    alt: 'Missing-value checks and data cleaning',
  },
  {
    src: '/goldprice_regression/Screenshot%202026-10-13%20224622.png',
    alt: 'S&P 500 closing price and mean price over time',
  },
].map(({ src, alt }) => ({ type: 'image', src, alt }))

const stockPrediction: ProjectData = {
  id: 3,
  category: 'data',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#B4763B" strokeWidth="1.6">
      <path d="M3 3v18h18" />
      <path d="m7 15 4-5 3 3 5-7" />
    </svg>
  ),
  bgGradient: 'linear-gradient(135deg,rgba(255,214,165,.35),rgba(var(--primary-rgb),.22))',
  titleKey: 'projects.items.stockPrediction.title',
  descriptionKey: 'projects.items.stockPrediction.description',
  stack: ['Python', 'Regression Modeling', 'Pandas', 'Matplotlib'],
  media: screenshots,
  githubUrl: 'https://github.com/Threeraput/datasci_regression_project',
}

export default stockPrediction