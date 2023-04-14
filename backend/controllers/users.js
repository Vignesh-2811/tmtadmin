import User from '../models/User.js';

/* READ */

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    const collection = admin.collection('events');

    const events = await collection.find({}).toArray();

    const formattedEvents = events.map((event) => ({
      _id: event._id,
      eventName: event.eventName,
      artist: event.artist,
      city: event.city,
      date: event.date,
      time: event.time,
      createdAt: event.createdAt,
      imageUrl: event.imageUrl,
    }));
    res.status(200).json(formattedEvents);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */

export const editEvent = async (req, res) => {
  try {
    const collection = admin.collection('events');
    const { id } = req.params;
    const { eventName, artist, city, date, time, imageUrl } = req.body;

    const result = await collection.updateOne(
      { _id: ObjectId(id) },
      { $set: { eventName, artist, city, date, time, imageUrl } }
    );

    if (result.modifiedCount !== 1) {
      throw new Error(`Failed to update event with ID ${id}`);
    }

    res.status(200).json({ message: `Event with ID ${id} has been updated` });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
