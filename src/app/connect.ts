import * as mongoose from 'mongoose';

type OptionsType = {
  db: string,
};

export const connect = ({ db }: OptionsType): void => {
  const connect = () => {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }).then(() => {
      console.info(`Successfully connected to ${db}`);
    }).catch(error => {
      console.error(error);
      process.exit(1);
    });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
