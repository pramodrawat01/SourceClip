export const models = [

  // =====================================================
  // OPENAI
  // =====================================================

  {
    id: "gpt-5-4",
    organizationId: "openai",

    name: "GPT-5.4",
    slug: "gpt-5-4",

    family: "GPT-5",

    type: "Frontier Model",

    status: "Active",

    releaseDate: "2026-03-05",

    description:
      "Frontier model designed for complex professional work, reasoning, coding, and agentic workflows.",

    capabilities: [
      "Reasoning",
      "Coding",
      "Multimodal",
      "Tool Use",
      "Agents",
      "Computer Use",
    ],

    modalities: {
      input: ["Text", "Image"],
      output: ["Text"],
    },

    contextWindow: 1050000,

    maxOutputTokens: 128000,

    reasoning: true,

    toolUse: true,

    structuredOutputs: true,

    openWeights: false,

    license: "Proprietary",

    api: {
      available: true,
      modelId: "gpt-5.4",
      inputPrice: 2.5,
      outputPrice: 15,
      currency: "USD",
      unit: "per 1M tokens",
    },

    tags: [
      "frontier",
      "reasoning",
      "coding",
      "agents",
      "multimodal",
    ],

    links: {
      model:
        "https://developers.openai.com/api/docs/models/gpt-5.4",
    },
  },

  {
    id: "gpt-5-4-mini",
    organizationId: "openai",

    name: "GPT-5.4 mini",
    slug: "gpt-5-4-mini",

    family: "GPT-5",

    type: "Efficient Model",

    status: "Active",

    releaseDate: "2026-03-17",

    description:
      "Smaller and faster model optimized for high-volume workloads, coding, reasoning, multimodal understanding, and tool use.",

    capabilities: [
      "Reasoning",
      "Coding",
      "Multimodal",
      "Tool Use",
      "Agents",
    ],

    modalities: {
      input: ["Text", "Image"],
      output: ["Text"],
    },

    contextWindow: 1050000,

    reasoning: true,

    toolUse: true,

    structuredOutputs: true,

    openWeights: false,

    license: "Proprietary",

    api: {
      available: true,
      modelId: "gpt-5.4-mini",
      inputPrice: 0.75,
      outputPrice: 4.5,
      currency: "USD",
      unit: "per 1M tokens",
    },

    tags: [
      "fast",
      "efficient",
      "coding",
      "reasoning",
      "agents",
    ],

    links: {
      model:
        "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
    },
  },

  {
    id: "gpt-5-4-nano",
    organizationId: "openai",

    name: "GPT-5.4 nano",
    slug: "gpt-5-4-nano",

    family: "GPT-5",

    type: "Small Model",

    status: "Active",

    releaseDate: "2026-03-17",

    description:
      "Small and efficient model designed for classification, extraction, ranking, coding subagents, and latency-sensitive workloads.",

    capabilities: [
      "Reasoning",
      "Coding",
      "Classification",
      "Extraction",
      "Tool Use",
    ],

    modalities: {
      input: ["Text", "Image"],
      output: ["Text"],
    },

    contextWindow: 1050000,

    reasoning: true,

    toolUse: true,

    structuredOutputs: true,

    openWeights: false,

    license: "Proprietary",

    tags: [
      "fast",
      "low-cost",
      "classification",
      "coding",
      "subagents",
    ],

    links: {
      model:
        "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
    },
  },


  // =====================================================
  // ANTHROPIC
  // =====================================================

  {
    id: "claude-opus-4-6",
    organizationId: "anthropic",

    name: "Claude Opus 4.6",
    slug: "claude-opus-4-6",

    family: "Claude 4",

    type: "Frontier Model",

    status: "Active",

    releaseDate: "2026-02-05",

    description:
      "Anthropic's advanced model for coding, agentic tasks, computer use, research, analysis, and long-context work.",

    capabilities: [
      "Reasoning",
      "Coding",
      "Computer Use",
      "Agents",
      "Long Context",
      "Research",
      "Tool Use",
    ],

    modalities: {
      input: ["Text", "Image"],
      output: ["Text"],
    },

    contextWindow: 1000000,

    reasoning: true,

    toolUse: true,

    openWeights: false,

    license: "Proprietary",

    tags: [
      "frontier",
      "reasoning",
      "coding",
      "agents",
      "long-context",
    ],

    links: {
      model:
        "https://www.anthropic.com/news/claude-opus-4-6",
    },
  },

  {
    id: "claude-sonnet-4-6",
    organizationId: "anthropic",

    name: "Claude Sonnet 4.6",
    slug: "claude-sonnet-4-6",

    family: "Claude 4",

    type: "General Purpose Model",

    status: "Active",

    releaseDate: "2026-02-17",

    description:
      "Balanced Claude model focused on coding, computer use, reasoning, agent planning, knowledge work, and design.",

    capabilities: [
      "Reasoning",
      "Coding",
      "Computer Use",
      "Agents",
      "Long Context",
      "Knowledge Work",
    ],

    modalities: {
      input: ["Text", "Image"],
      output: ["Text"],
    },

    contextWindow: 1000000,

    reasoning: true,

    toolUse: true,

    openWeights: false,

    license: "Proprietary",

    tags: [
      "balanced",
      "coding",
      "reasoning",
      "agents",
      "long-context",
    ],

    links: {
      model:
        "https://www.anthropic.com/news/claude-sonnet-4-6",
    },
  },

  {
    id: "claude-haiku-4-5",
    organizationId: "anthropic",

    name: "Claude Haiku 4.5",
    slug: "claude-haiku-4-5",

    family: "Claude 4",

    type: "Fast Model",

    status: "Active",

    releaseDate: "2025-10-15",

    description:
      "Fast and efficient Claude model designed for lower-latency applications, coding, agents, and computer-use workloads.",

    capabilities: [
      "Coding",
      "Computer Use",
      "Agents",
      "Reasoning",
      "Tool Use",
    ],

    modalities: {
      input: ["Text", "Image"],
      output: ["Text"],
    },

    reasoning: true,

    toolUse: true,

    openWeights: false,

    license: "Proprietary",

    tags: [
      "fast",
      "efficient",
      "coding",
      "agents",
    ],

    links: {
      model:
        "https://www.anthropic.com/news/claude-haiku-4-5",
    },
  },


  // =====================================================
  // GOOGLE DEEPMIND
  // =====================================================

  {
    id: "gemini-4-argon",
    organizationId: "google-deepmind",

    name: "Gemini 4 Argon",
    slug: "gemini-4-argon",

    family: "Gemini",

    type: "Frontier Model",

    status: "Active",

    releaseDate: "2026-09",

    description:
      "Google DeepMind's next-generation frontier intelligence model.",

    capabilities: [
      "Reasoning",
      "Multimodal",
      "Coding",
      "Agents",
      "Tool Use",
    ],

    modalities: {
      input: [
        "Text",
        "Image",
        "Audio",
        "Video",
      ],
      output: ["Text"],
    },

    reasoning: true,

    toolUse: true,

    openWeights: false,

    license: "Proprietary",

    tags: [
      "frontier",
      "multimodal",
      "reasoning",
      "agents",
    ],

    links: {
      model:
        "https://deepmind.google/models/",
    },
  },

  {
    id: "gemini-3-8-flash",
    organizationId: "google-deepmind",

    name: "Gemini 3.8 Flash",
    slug: "gemini-3-8-flash",

    family: "Gemini",

    type: "Fast Model",

    status: "Active",

    releaseDate: "2026-09-02",

    description:
      "Fast Gemini model designed for complex agentic tasks at scale.",

    capabilities: [
      "Reasoning",
      "Coding",
      "Multimodal",
      "Agents",
      "Tool Use",
    ],

    modalities: {
      input: [
        "Text",
        "Image",
        "Audio",
        "Video",
      ],
      output: ["Text"],
    },

    reasoning: true,

    toolUse: true,

    openWeights: false,

    license: "Proprietary",

    tags: [
      "fast",
      "multimodal",
      "agents",
      "reasoning",
    ],

    links: {
      model:
        "https://deepmind.google/models/",
    },
  },

  {
    id: "gemini-audio",
    organizationId: "google-deepmind",

    name: "Gemini Audio",
    slug: "gemini-audio",

    family: "Gemini",

    type: "Audio Model",

    status: "Active",

    description:
      "Gemini family of models designed for advanced real-time audio applications.",

    capabilities: [
      "Audio",
      "Real-time",
      "Speech",
      "Multimodal",
    ],

    modalities: {
      input: [
        "Text",
        "Audio",
      ],
      output: [
        "Text",
        "Audio",
      ],
    },

    openWeights: false,

    license: "Proprietary",

    tags: [
      "audio",
      "real-time",
      "speech",
      "multimodal",
    ],

    links: {
      model:
        "https://deepmind.google/models/",
    },
  },


  // =====================================================
  // META
  // =====================================================

  {
    id: "llama-4-scout",
    organizationId: "meta-ai",

    name: "Llama 4 Scout",
    slug: "llama-4-scout",

    family: "Llama 4",

    type: "Open Model",

    status: "Active",

    description:
      "Multimodal Llama model designed for text and image understanding with a long context window.",

    capabilities: [
      "Text",
      "Vision",
      "Multimodal",
      "Reasoning",
    ],

    modalities: {
      input: [
        "Text",
        "Image",
      ],
      output: ["Text"],
    },

    contextWindow: 10000000,

    parameterInfo:
      "17B active parameters, 109B total parameters",

    reasoning: true,

    toolUse: true,

    openWeights: true,

    license: "Llama 4 Community License",

    tags: [
      "open",
      "multimodal",
      "vision",
      "long-context",
    ],

    links: {
      model:
        "https://ai.meta.com/resources/models-and-libraries/llama-downloads/",
    },
  },

  {
    id: "llama-4-maverick",
    organizationId: "meta-ai",

    name: "Llama 4 Maverick",
    slug: "llama-4-maverick",

    family: "Llama 4",

    type: "Open Model",

    status: "Active",

    description:
      "Multimodal Llama model designed for image and text understanding and efficient responses.",

    capabilities: [
      "Text",
      "Vision",
      "Multimodal",
      "Reasoning",
    ],

    modalities: {
      input: [
        "Text",
        "Image",
      ],
      output: ["Text"],
    },

    openWeights: true,

    license: "Llama 4 Community License",

    tags: [
      "open",
      "multimodal",
      "vision",
    ],

    links: {
      model:
        "https://ai.meta.com/resources/models-and-libraries/llama-downloads/",
    },
  },


  // =====================================================
  // MISTRAL
  // =====================================================

  {
    id: "mistral-medium-3-5",
    organizationId: "mistral",

    name: "Mistral Medium 3.5",
    slug: "mistral-medium-3-5",

    family: "Mistral",

    type: "Frontier Model",

    status: "Active",

    releaseDate: "2026-04",

    description:
      "Multimodal model optimized for agentic and coding use cases.",

    capabilities: [
      "Reasoning",
      "Coding",
      "Multimodal",
      "Agents",
      "Tool Use",
    ],

    modalities: {
      input: [
        "Text",
        "Image",
      ],
      output: ["Text"],
    },

    reasoning: true,

    toolUse: true,

    openWeights: false,

    license: "Modified MIT",

    tags: [
      "frontier",
      "coding",
      "multimodal",
      "agents",
    ],

    links: {
      model:
        "https://mistral.ai/models/",
    },
  },

  {
    id: "mistral-small-4",
    organizationId: "mistral",

    name: "Mistral Small 4",
    slug: "mistral-small-4",

    family: "Mistral",

    type: "Open Model",

    status: "Active",

    releaseDate: "2026-03",

    description:
      "Hybrid model combining instruction following, reasoning, and coding with multimodal input.",

    capabilities: [
      "Reasoning",
      "Coding",
      "Multimodal",
      "Agents",
    ],

    modalities: {
      input: [
        "Text",
        "Image",
      ],
      output: ["Text"],
    },

    reasoning: true,

    toolUse: true,

    openWeights: true,

    license: "Apache 2.0",

    tags: [
      "open",
      "coding",
      "reasoning",
      "multimodal",
    ],

    links: {
      model:
        "https://mistral.ai/models/",
    },
  },

  {
    id: "mistral-large-3",
    organizationId: "mistral",

    name: "Mistral Large 3",
    slug: "mistral-large-3",

    family: "Mistral",

    type: "Open Model",

    status: "Active",

    releaseDate: "2025-12",

    description:
      "General-purpose multimodal mixture-of-experts model.",

    capabilities: [
      "Reasoning",
      "Coding",
      "Multimodal",
      "Agents",
    ],

    modalities: {
      input: [
        "Text",
        "Image",
      ],
      output: ["Text"],
    },

    openWeights: true,

    license: "Apache 2.0",

    tags: [
      "open",
      "multimodal",
      "MoE",
      "general-purpose",
    ],

    links: {
      model:
        "https://mistral.ai/models/",
    },
  },

  {
    id: "ministral-3-14b",
    organizationId: "mistral",

    name: "Ministral 3 14B",
    slug: "ministral-3-14b",

    family: "Ministral",

    type: "Small Model",

    status: "Active",

    releaseDate: "2025-12",

    description:
      "Efficient model designed for text and vision workloads and deployment at smaller scale.",

    capabilities: [
      "Text",
      "Vision",
      "Reasoning",
      "Agents",
    ],

    modalities: {
      input: [
        "Text",
        "Image",
      ],
      output: ["Text"],
    },

    openWeights: true,

    license: "Apache 2.0",

    tags: [
      "open",
      "lightweight",
      "vision",
      "edge",
    ],

    links: {
      model:
        "https://mistral.ai/models/",
    },
  },


  // =====================================================
  // xAI
  // =====================================================

  {
    id: "grok-4-6",
    organizationId: "xai",

    name: "Grok 4.6",
    slug: "grok-4-6",

    family: "Grok",

    type: "Frontier Model",

    status: "Active",

    releaseDate: "2026-08-26",

    description:
      "xAI's flagship model designed for long-running agents and interactive and visual workloads.",

    capabilities: [
      "Reasoning",
      "Coding",
      "Agents",
      "Multimodal",
      "Computer Use",
    ],

    modalities: {
      input: [
        "Text",
        "Image",
      ],
      output: ["Text"],
    },

    contextWindow: 500000,

    reasoning: true,

    toolUse: true,

    openWeights: false,

    license: "Proprietary",

    tags: [
      "frontier",
      "reasoning",
      "coding",
      "agents",
      "multimodal",
    ],

    links: {
      model:
        "https://x.ai/news/grok-4-6-microsoft-foundry",
    },
  },

  {
    id: "grok-build-0-1",
    organizationId: "xai",

    name: "Grok Build 0.1",
    slug: "grok-build-0-1",

    family: "Grok",

    type: "Coding Model",

    status: "Active",

    releaseDate: "2026-05-29",

    description:
      "Coding-focused model designed for agentic software development, debugging, web development, and MCP workflows.",

    capabilities: [
      "Coding",
      "Agents",
      "Tool Use",
      "MCP",
      "Debugging",
    ],

    modalities: {
      input: ["Text"],
      output: ["Text"],
    },

    reasoning: true,

    toolUse: true,

    openWeights: false,

    license: "Proprietary",

    tags: [
      "coding",
      "agents",
      "MCP",
      "developer",
    ],

    links: {
      model:
        "https://x.ai/news/grok-build-0-1",
    },
  },
];