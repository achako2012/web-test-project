/**
 * It uses `envalid` library to read and validate environment variables.
 */
import { bool, cleanEnv } from 'envalid';

const env = () => <{ HEADLESS: boolean }>cleanEnv(process.env, {
    HEADLESS: bool({ default: false })
});

export default env;
