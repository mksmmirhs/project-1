import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentService.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'student created success',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudents();
    res.status(200).json({
      success: true,
      message: 'All student retrieve success',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const findStudentById = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.findStudentById(studentId);
    res.status(200).json({
      success: true,
      message: 'Student retrieve success',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  findStudentById,
};
