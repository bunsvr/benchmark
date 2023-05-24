export interface Expect {
    /**
     * Response body
     */
    body?: string;

    /**
     * Status code
     */
    statusCode?: number;

    /**
     * 
     */
    headers?: Dict<string | string[]>;
}

export interface Test {
    /**
     * Test pathname
     */
    path: string;

    /**
     * Request method. Defaults to GET
     */
    method?: string;

    /**
     * Expect response
     */
    expect: Expect;

    /**
     * Header
     */
    headers?: Record<string, string>;

    /**
     * The body file
     */
    bodyFile?: string;

    /**
     * Test description
     */
    description: string;
}

/**
 * Config types
 */
export interface Config {
    /**
     * Boot up time in milliseconds
     */
    boot?: number;
    /**
     * Frameworks to be included
     */
    include?: string[];
    /**
     * Frameworks to be excluded
     */
    exclude?: string[];
    /**
     * All test cases
     */
    tests: Test[];
    /**
     * All scripts to run before benchmark
     */
    scripts: {
        /**
         * Use node, deno or bun or anything to run the script. Defaults to bun
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

    /**
     * Explicitly set the package manager for installations
     */
    pkg?: "npm" | "yarn" | "pnpm" | "bun";
    /**
     * The tool to test the benchmark. Defaults to `bombardier`
     */
    cli?: string;
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
    /**
     * Entry point
     */
    entry: string;
    /**
     * Runtime for the framework
     */
    runtime: "bun" | "node" | "deno";
    /**
     * The framework version
     */
    version: string;
}