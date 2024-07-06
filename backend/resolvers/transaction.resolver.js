import Transaction from "../models/transaction.model.js";

const transactionResolver = {
  Query: {
    transactions: async (_, _, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized!!");
        const userId = await context.getUser()._id;
        const transactions = await Transaction.find({ userId });
        return transactions;
      } catch (error) {
        console.error("Error in transactions query", error);
        throw new Error(error.message || "Internal Server Error");
      }
    },
    transaction: async (_, { transactionId }) => {
      try {
        const transaction = await Transaction.findById(transactionId);
        return transaction;
      } catch (error) {
        console.error("Error in transaction query", error);
        throw new Error(error.message || "Internal Server Error");
      }
    },
    // TODO Add categoryStatistics query
  },
  Mutation: {
    createTransaction: async (_, { input }, context) => {
      try {
        const newTransaction = new Transaction({
          ...input,
          userId: context.getUser()._id,
        });
        await newTransaction.save();
        return newTransaction;
      } catch (error) {
        console.error("Error in createTransaction mutation", error);
        throw new Error(error.message || "Internal Server Error");
      }
    },
    updateTransaction: async (_, { input }) => {
      try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(
          input.transactionId,
          input,
          { new: true }
        );
        return updatedTransaction;
      } catch (error) {
        console.error("Error in updateTransaction mutation", error);
        throw new Error(error.message || "Internal Server Error");
      }
    },
    deleteTransaction: async (_, { transactionId }) => {
      try {
        const deletedTransaction = await Transaction.findByIdAndDelete(
          transactionId
        );
        return deletedTransaction;
      } catch (error) {
        console.error("Error in deleteTransaction mutation", error);
        throw new Error(error.message || "Internal Server Error");
      }
    },
  },
  // TODO Add Transaction/User Relationship
};
export default transactionResolver;
