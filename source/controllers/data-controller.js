/**
 * @file Simple backend for Angular playground.
 * @author Martin Frey <martin.frey@ost.ch>
 */

class DataController {

    constructor() {

        this.addData = async (req, res) => {
            try {
                res.json({});
            } catch(err) {
                res.status(500).json("Failure when adding data.");
            }
        };

        this.updateData = async (req, res) => {
            try {
                res.json({});
            } catch(err) {
                res.status(500).json("Failure when updating data.");
            }
        };

        this.getData = async (req, res) => {
            try {
                res.json({});
            } catch(err) {
                res.status(500).json("Failure when getting data.");
            }
        };

        this.getDataById = async (req, res) => {
            try {
                res.json({});
            } catch(err) {
                res.status(500).json("Failure when getting data by ID.");
            }
        };

        this.deleteDataById = async (req, res) => {
            try {
                res.json({});
            } catch(err) {
                res.status(500).json("Failure when deleting data by ID");
            }
        };
    }
}

export const dataController = new DataController();