'use strict';

import app from './index';

const PORT = process.env.PORT || 2019;

// Start application
app.listen(PORT, console.log(`Server running on port: ${PORT}`));
