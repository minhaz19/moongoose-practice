export interface UserInterface {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  dob: string;
  role: "student" | "teacher";
  gender: string;
  presentAddress: string;
  age: number;
  email: string;
  contactNo?: number;
}
