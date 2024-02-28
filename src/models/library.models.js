import mongoose from 'mongoose';

const librarySchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    bookTitle: {
        type: String,
        required: true,
    },
    allottedDate: {
        type: Date,
        required: true,
    },
    hasReturned: {
        type: Boolean,
        default: false,
    }
});

const LibrarySchema = mongoose.model('Library', librarySchema);

export default LibrarySchema;