// // import * as auth from "../../api/auth/index.js";
// import { loginListener } from "../../ui/auth.js";
// import { updateLoginVisibility } from "../../ui/auth.js";
// import { load } from "../../storage/index.js";

// jest.mock("../../api/auth/index.js", () => ({
//     login: jest.fn(),
// }));

// jest.mock("../../storage/index.js", () => ({
//     load: jest.fn(),
// }));

// // Mock localStorage
// beforeAll(() => {
//     global.localStorage = {
//         setItem: jest.fn(),
//         getItem: jest.fn(),
//         clear: jest.fn(),
//     };
// });

// describe("loginListener", () => {
//     beforeEach(() => {
//         jest.clearAllMocks(); // Clear mock data before each test
//     });

//     it("should call login and store a token with valid credentials", async () => {
//         // Arrange
//         const mockEvent = {
//             preventDefault: jest.fn(),
//             target: {
//                 elements: [
//                     { name: "email", value: "test@example.com" },
//                     { name: "password", value: "validpassword" },
//                 ],
//                 get: (name) =>
//                     name === "email" ? "test@example.com" : "validpassword",
//             },
//         };

//         // Mock the auth.login function to return a simulated user with a token
//         const mockToken = "validToken123";
//         auth.login.mockResolvedValue({ name: "John Doe", token: mockToken });

//         // Act
//         await loginListener(mockEvent);

//         // Assert
//         expect(auth.login).toHaveBeenCalledWith(
//             "test@example.com",
//             "validpassword"
//         );
//         expect(localStorage.setItem).toHaveBeenCalledWith("token", mockToken);
//     });

//     it("should update login visibility based on token presence", () => {
//         // Arrange
//         load.mockReturnValue("validToken123"); // Simulate a valid token is loaded
//         document.body.classList.add = jest.fn();
//         document.body.classList.remove = jest.fn();

//         // Act
//         updateLoginVisibility();

//         // Assert
//         expect(document.body.classList.add).toHaveBeenCalledWith("logged-in");
//     });

//     it("should show alert when login fails", async () => {
//         // Arrange
//         const mockEvent = {
//             preventDefault: jest.fn(),
//             target: {
//                 elements: [
//                     { name: "email", value: "chrber01279@stud.noroff.no" },
//                     { name: "password", value: "randompassword" },
//                 ],
//                 get: (name) =>
//                     name === "email"
//                         ? "chrber01279@stud.noroff.no"
//                         : "randompassword",
//             },
//         };

//         // Mock auth.login to throw an error when the login fails
//         auth.login.mockRejectedValue(new Error("Login failed"));

//         // Mock window.alert
//         global.alert = jest.fn();

//         // Act
//         await loginListener(mockEvent);

//         // Assert
//         expect(alert).toHaveBeenCalledWith(
//             "Either your username was not found or your password is incorrect"
//         );
//     });
// });
