// import { NewsApi } from "../Redux/NewsApi/GoogleNews";
// import { Store } from "../Redux/Store";
// import { useDispatch } from "react-redux";

// // const dispatch = useDispatch();


// export const SportsLoader = async () => {
//     try {
//         const response1 = await Store.dispatch(NewsApi.endpoints.getSport.initiate());

//         if (!response1) {
//             console.error("Error fetching sports data");
//             return null;
//         }

//         return response1.data;
//     } catch (error) {
//         console.error("Error fetching sports data:", error);
//         return null;
//     }
// }

// export const BuisnessLoader = async () => {
//     try {
//         const response2 = await Store.dispatch(NewsApi.endpoints.getBusiness.initiate());

//     if (!response2) {
//         console.log("Error fetching buisness data")
//         return;
//     }

//     return response2.data;
//     } catch (error) {
//         console.log("Error fetching buisness data:", error)
//         return null;
//     }
// }

// export const EntertainmentLoader = async () => {
//     try {
//         const response3 = await Store.dispatch(NewsApi.endpoints.getEntertainment.initiate());

//     if (!response3) {
//         console.log("Error Entertainment data")
//         return;
//     }

//     return response3.data;
//     } catch (error) {
//         console.log("Error Entertainment data:", error)
//         return null;
//     }

// }

// export const HealthLoader = async () => {
//     try {
//         const response4 = await Store.dispatch(NewsApi.endpoints.getHealth.initiate());

//     if (!response4) {
//         console.log("Error health data")
//         return;
//     }

//     return response4.data;
//     } catch (error) {
//         console.log("Error health data:", error)
//         return null;
//     }
// }

// export const WorldLoader = async () => {
//     try {
//         const response5 = await Store.dispatch(NewsApi.endpoints.getWorld.initiate());

//     if (!response5) {
//         console.log("Error world data")
//         return;
//     }

//     return response5.data;
//     } catch (error) {
//         console.log("Error world data:", error)
//         return null;
//     }
// }

// export const ScienceLoader = async () => {
//     try {
//         const response6 = await Store.dispatch(NewsApi.endpoints.getScience.initiate());

//     if (!response6) {
//         console.log("Error science data")
//         return;
//     }

//     return response6.data;
//     } catch (error) {
//         console.log("Error science data:", error)
//         return null;
//     }
// }

// export const TechnologyLoader = async () => {
//     try {
//         const {data, error} = await Store.dispatch(NewsApi.endpoints.getTechnology.initiate());

//     if (error) {
//         console.log("Error technology error")
//         return;
//     }

//     return data;
//     } catch (error) {
//         console.log("Error technology error:", error)
//         return null;
//     }
// }