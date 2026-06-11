export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  summary: string;
  highlights: string[];
  deliverables: string[];
  process: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "new-houses",
    title: "New houses",
    shortDescription:
      "Bespoke homes shaped around site, light, budget, and the way each household wants to live.",
    intro:
      "A complete architectural service for people starting with land, a replacement dwelling, or a blank brief.",
    summary:
      "Valo Design helps shape one-off homes from the first feasibility study through planning, detailed design, and construction-stage support.",
    highlights: [
      "Site appraisal, brief development, and early layout options",
      "Concept plans that balance views, privacy, daylight, and daily routines",
      "Planning-ready drawings, design statements, and consultant coordination",
      "Material direction and technical information for confident construction",
    ],
    deliverables: [
      "Feasibility sketches and massing studies",
      "Concept design drawings",
      "Planning application information",
      "Detailed design and construction drawing packages",
    ],
    process: [
      "Clarify the site constraints, ambitions, budget, and timeline.",
      "Develop a calm concept that makes the most of light, outlook, and movement.",
      "Prepare the planning package and coordinate supporting information.",
      "Refine the technical detail so the design can move cleanly toward site.",
    ],
    idealFor: [
      "Individual plots",
      "Replacement dwellings",
      "Rural or edge-of-settlement homes",
      "Families planning a long-term home",
    ],
  },
  {
    slug: "renovation",
    title: "Renovation",
    shortDescription:
      "Careful redesign of existing houses, from whole-home remodelling to sensitive extensions.",
    intro:
      "Measured design support for homes that need more light, better flow, stronger detail, or a more generous connection to the garden.",
    summary:
      "Renovation work starts by understanding what already works. Valo Design then develops practical, characterful changes that improve the home without losing what gives it value.",
    highlights: [
      "Existing house assessment and measured design options",
      "Extension layouts for kitchens, living spaces, lofts, and side returns",
      "Sensitive improvements to period and character homes",
      "Phased design thinking for projects with budget or timing constraints",
    ],
    deliverables: [
      "Existing and proposed plans",
      "Design options for extensions and internal changes",
      "Planning, permitted development, or lawful development drawings",
      "Detail packages for builders and tender conversations",
    ],
    process: [
      "Map the existing house, its pain points, and the rooms worth preserving.",
      "Test layout options against daylight, circulation, structure, and budget.",
      "Agree a preferred route and prepare the required approval drawings.",
      "Develop the details, finishes, and builder information around the final design.",
    ],
    idealFor: [
      "Whole-house refurbishments",
      "Kitchen and living extensions",
      "Loft and side-return additions",
      "Older homes needing careful updates",
    ],
  },
  {
    slug: "detailed-design",
    title: "Detailed design",
    shortDescription:
      "Technical drawing packages, material guidance, and coordination for confident construction.",
    intro:
      "The stage where concept design becomes a buildable set of decisions, drawings, junctions, and material choices.",
    summary:
      "Detailed design gives builders, consultants, and clients the information they need to price, coordinate, and construct with fewer surprises.",
    highlights: [
      "Construction drawings for plans, sections, elevations, and key junctions",
      "Coordination with structural, energy, and specialist consultants",
      "Material, product, and finish guidance tied back to the design intent",
      "Tender-ready information for clearer conversations with builders",
    ],
    deliverables: [
      "Technical plans, sections, and elevations",
      "Opening, joinery, and key detail drawings",
      "Schedules for finishes, doors, windows, and fixtures",
      "Coordination notes for consultants and contractors",
    ],
    process: [
      "Review the approved or preferred design and identify key technical risks.",
      "Coordinate structure, insulation, drainage, services, and material build-ups.",
      "Prepare drawings and schedules for pricing or construction.",
      "Support tender queries and refine information where needed.",
    ],
    idealFor: [
      "Projects moving beyond planning",
      "Clients comparing builder prices",
      "Complex extensions",
      "Homes with important material details",
    ],
  },
  {
    slug: "planning-support",
    title: "Planning support",
    shortDescription:
      "Clear concept options, planning drawings, and design statements that help proposals move forward.",
    intro:
      "Practical support for turning an idea into a clear planning submission or pre-application conversation.",
    summary:
      "Valo Design prepares calm, well-explained proposals that respond to context, policy, neighbours, and the character of the existing home or site.",
    highlights: [
      "Pre-application design studies and planning strategy input",
      "Planning drawings for new homes, extensions, and alterations",
      "Design statements that explain the proposal clearly",
      "Responsive design revisions after planner or neighbour feedback",
    ],
    deliverables: [
      "Location, block, existing, and proposed drawings",
      "Planning-ready elevations, sections, and roof plans",
      "Design and access or design statement material",
      "Submission support and response drawings",
    ],
    process: [
      "Review the local context, planning history, and relevant constraints.",
      "Develop a proposal that can be clearly justified in design terms.",
      "Prepare drawings and written material for submission.",
      "Respond to planning feedback with practical, proportionate revisions.",
    ],
    idealFor: [
      "Early-stage site decisions",
      "Householder planning applications",
      "Pre-application advice",
      "Sensitive sites and character areas",
    ],
  },
  {
    slug: "interior-design",
    title: "Interior design",
    shortDescription:
      "Room layouts, finishes, lighting, joinery, and furniture direction that make the architecture feel complete.",
    intro:
      "Interior design support for homes where the rooms, materials, lighting, and everyday details need to work as one considered whole.",
    summary:
      "Valo Design connects the architecture with the lived experience of the home, shaping internal spaces that feel calm, useful, and personal.",
    highlights: [
      "Interior layouts for kitchens, living spaces, bedrooms, and work areas",
      "Finish palettes, fixtures, lighting, and material direction",
      "Bespoke joinery concepts for storage, display, and room definition",
      "Furniture, colour, and styling guidance that supports the architecture",
    ],
    deliverables: [
      "Room layout plans and furniture arrangements",
      "Finish, colour, and material schedules",
      "Lighting and fixture direction",
      "Joinery concepts and key interior elevations",
    ],
    process: [
      "Understand how each room is used, what should stay, and what needs to change.",
      "Develop a restrained palette that suits the architecture and daily life.",
      "Coordinate finishes, lighting, storage, and furniture around the agreed concept.",
      "Prepare clear schedules and drawings for ordering, pricing, and installation.",
    ],
    idealFor: [
      "New homes needing complete interior direction",
      "Renovations with important finish decisions",
      "Kitchen, living, and bedroom schemes",
      "Clients seeking calm, cohesive rooms",
    ],
  },
  {
    slug: "energy-compliance",
    title: "Energy Compliance",
    shortDescription:
      "SAP assessments, TM59 overheating modelling, and psi calculations to support compliant, comfortable homes.",
    intro:
      "Energy compliance support for residential projects that need clear calculations, coordinated design input, and a smoother route through approval.",
    summary:
      "Valo Design helps project teams understand and demonstrate building performance through SAPs, TM59 modelling, and psi-value calculations.",
    highlights: [
      "SAP calculations for new homes, extensions, and residential design stages",
      "TM59 overheating modelling to test summer comfort and glazing strategies",
      "Psi-value calculations for junctions where thermal bridging matters",
      "Design feedback that links compliance results back to useful architectural decisions",
    ],
    deliverables: [
      "SAP assessment information",
      "TM59 overheating reports",
      "Psi-value calculation summaries",
      "Design recommendations for fabric, glazing, ventilation, and junction performance",
    ],
    process: [
      "Review drawings, specification notes, glazing areas, and construction build-ups.",
      "Model the project against the relevant energy and overheating criteria.",
      "Identify any pressure points in fabric, services, ventilation, or junction details.",
      "Issue clear compliance outputs and practical design recommendations.",
    ],
    idealFor: [
      "New-build houses",
      "Low-energy residential projects",
      "Planning and building control submissions",
      "Design teams coordinating fabric performance",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
