import express from 'express';
import { StudentController } from './student.contoller';
const router = express.Router();

router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudent);
router.get('/:studentId', StudentController.findStudentById);

export const StudentRoutes = router;
