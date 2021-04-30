import ICampus from './ICampus';
import ICourse from './ICourse';
import IUniversity from './IUniversity';

export default interface Scholarship {
  full_price: number;
  price_with_discount: number;
  discount_percentage: number;
  start_date: string;
  enrollment_semester: string;
  enabled: boolean;
  course: ICourse;
  university: IUniversity;
  campus: ICampus;
}
