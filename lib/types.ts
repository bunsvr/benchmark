/**
 * Config types
 */
export interface Config {
    /**
     * Boot up time in milliseconds
     */
    boot: number;
    /**
     * Frameworks to be included
     */
    include: string[];
    /**
     * All test cases
     */
    tests: {
        /**
         * Test pathname
         */
        path: string;

        /**
         * Request method. Defaults to GET
         */
        method?: string;

        /**
         * Request body
         */
        body?: string;

        /**
         * Request headers
         */
        headers?: Record<string, string>;
    }[];
    /**
     * All scripts to run before benchmark
     */
    scripts: {
        /**
         * Use node or bun to run the script. Defaults to bun
         */
        type?: string;

        /**
         * Script relative path in ./scripts
         */
        file: string;
    }[];
    /**
     * Bombardier options
     */
    command: {
        connections: number;
        duration: number;
        fasthttp?: boolean;
    };
    /**
     * Additional environment variable
     */
    env?: Record<string, string>;
}
/**
 * Framework info
 */
export interface Info {
    /**
     * Required dependencies
     */
    dependencies: Record<string, string>;
    /**
     * Script to boot up args
     */
    run: [string, ...string[]];
}