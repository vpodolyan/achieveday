[![Netlify Status](https://api.netlify.com/api/v1/badges/c449ec53-1c53-4e1e-9042-63609b214ee6/deploy-status)](https://app.netlify.com/sites/achieveday/deploys)
[![CodeQL](https://github.com/vpodolyan/achieveday/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/vpodolyan/achieveday/actions/workflows/codeql-analysis.yml)

Achieveday is a small productivity tool and source of inspiration. Write daily achievements, get inspirational phrases, and stay motivated. Now powered by AI 🚀

### Launch

For Stitch integration, we need to define `MONGO_STITCH_APP_ID` environment variable on Netlify or in `.env` file in the root directory. You also need to set `MISTRAL_API_KEY` in there.

### Credits

I want to thank Mistral AI for the free API tier as well as [@lukePeavey](https://github.com/lukePeavey) for [Quotable API](https://github.com/lukePeavey/quotable) which was used as the source of inspirational quotes before AI integration.
