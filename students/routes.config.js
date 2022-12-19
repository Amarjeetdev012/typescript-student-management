import {
  allStudents,
  create,
  entry,
  exit,
  allData,
  totalSpentTime,
} from './controllers/students.controller';
import { studentslist, getbyId } from './controllers/students.controller';
import { validAdmin } from '../common/middlewares/auth.validation.middleware';
import { validBody } from './middlewares/student.middleware';

const studentRoutes = (app) => {
  app.post('/students', validAdmin, validBody, create);
  app.post('/studentsEnter', entry);
  app.post('/studentsExit', exit);
  app.get('/students', validAdmin, studentslist);
  app.get('/students/:id', getbyId);
  app.get('/studentEntryExit', allData);
  app.get('/completeTime', totalSpentTime);
};

export default studentRoutes;