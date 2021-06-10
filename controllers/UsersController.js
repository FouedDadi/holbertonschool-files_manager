import sha1 from 'sha1';
import dbClient from '../utils/db';

const postNew = async function pstnw(request, result) {
  const { email } = request.body.email;
  const { password } = request.body.password;
  if (!email) {
    result.status(400).send(JSON.stringify({ error: 'Missing email' }));
  }
  if (!password) {
    result.status(400).send(JSON.stringify({ error: 'Missing password' }));
  }
  const emailexst = await dbClient.db.collection('users').findOne({ email });
  if (emailexst) {
    return result.status(400).send({ error: 'Already exist' });
  }
  const hashedpasswrd = sha1(password);

  const newusr = await dbClient.db
    .collection('users')
    .insertOne({ email, hashedpasswrd });
  const generatedid = newusr.insertedId();
  return result.status(201).json({ email, generatedid });
};
export default postNew;
