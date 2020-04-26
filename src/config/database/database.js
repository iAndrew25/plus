import Realm from 'realm';

import schemas from './schemas';

export default new Realm({
	schema: schemas
});