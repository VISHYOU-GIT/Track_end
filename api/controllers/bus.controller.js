import prisma from "../lib/prisma.js";

export const getBuses = async (req, res) => {

    try {
        const Buses = await prisma.buses.findMany();
        res.status(200).json(Buses);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to get buses" });
    }

}

export const addBus = async (req, res) => {

    const { busNumber, vehicleNumber, vehicleType } = req.body;

    if (!busNumber) {
        return res.status(400).json({ message: "Bus number is required" });
    }

    try {

        const newBus = await prisma.buses.create({

            data: {

                busNumber,
                vehicleNumber,
                vehicleType

            }

        });

        res.status(201).json(newBus && "Bus added successfully");

    } catch (error) {

        console.log(error);

        res.status(500).json({ message: "Failed to add post" });

    }

}
