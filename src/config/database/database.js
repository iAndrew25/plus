import Realm from 'realm';

import {CategorySchema, RecordSchema} from './schemas';

export default new Realm({
	schema: [CategorySchema, RecordSchema]
});