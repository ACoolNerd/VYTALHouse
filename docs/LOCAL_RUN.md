# VYTAL HOUSE — LOCAL RUN & DEVELOPMENT INSTRUCTIONS

## Quick Start (Local Server)

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start Local Development Server**:

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000/` in your browser.

3. **Audit Maryland CPOM Segregation**:

   ```bash
   npm run lint:entity
   ```

   Ensures zero cross-contamination between `VYTAL HOUSE MEDICAL, P.C.` ⚑ and `VYTAL HOUSE MANAGEMENT, LLC` ⚑.

4. **Production Build Verification**:

   ```bash
   npm run build
   ```

   Builds the optimized cPanel-ready static output into `dist/`.
