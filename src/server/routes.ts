import { Router } from 'express';

import commonRoutes from '@modules/common/routes';
import swaggerRoutes from '@modules/swagger';

const appRoutes = Router();

appRoutes.use('/docs', swaggerRoutes);
appRoutes.use(commonRoutes);

export default appRoutes;
