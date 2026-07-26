import {
  IndustryIntro,
  IndustryList,
} from "../styles/Industry.styled";
import { Wrapper } from "../styles/Output.styled";

const Industry: React.FC = () => {
  return (
    <Wrapper data-testid="industry">
      <IndustryIntro>
        Production-grade security projects I've built at Forensic CyberTech
        Pvt. Ltd.
      </IndustryIntro>
      {industryProjects.map(({ title, desc }) => (
        <IndustryList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </IndustryList>
      ))}
    </Wrapper>
  );
};

const industryProjects = [
  {
    title: "Rule Engine (SIEM)",
    desc: "Architected and built a custom detection rule engine from the ground up, later leading its development and roadmap; scaled the ruleset to 70,000+ detection rules across multiple threat categories. Drove performance optimization (data-structure benchmarking, field-name interning) toward a 1M events/sec throughput target, and enforced ruleset quality through automated static analysis catching broken logic, field inconsistencies, and regex defects.",
  },
  {
    title: "IOC",
    desc: "Built a multi-tenant threat intelligence analysis platform for SOC analysts, enabling submission of indicators (IPs, domains, URLs, file hashes) and returning enriched verdicts aggregated in real time from 7 industry-leading threat intelligence sources. Automated IOC triage, correlation, and enrichment with relationship-graph visualization, reputation analysis, and contextual insights.",
  },
  {
    title: "Threat Intelligence",
    desc: "Built an enterprise-grade threat intelligence platform unifying intelligence collection, correlation, investigation, and operationalization into a single collaborative workspace for SOC, government, and critical-infrastructure teams — enabling faster threat detection and reducing analyst investigation time through centralized intel workflows.",
  },
  {
    title: "Unified Ingest Pipeline",
    desc: "Designed a unified OpenSearch ingest pipeline normalizing telemetry from Wazuh, a custom Rust rule engine, and multi-vendor sources (CrowdStrike, Seqrite, AD, Zeek, CloudTrail) into a flat canonical schema spanning ~210 field mappings. Delivered the full package — component/index templates, Python simulator, test harness, and deployment SOP — for production rollout.",
  },
  {
    title: "UEBA",
    desc: "Architected the UEBA subsystem as a parallel Kafka branch tapping post-normalization, with a correlator consuming co-partitioned rule- and UEBA-alert topics to produce a single unified alert stream for downstream response.",
  },
  {
    title: "EDR (EaglEye)",
    desc: "Led development of the EaglEye EDR platform covering endpoint telemetry collection, detection, and response; designed the Android EDR agent architecture cataloging 60+ telemetry sources across 13 categories.",
  },
  {
    title: "Health Control Centre",
    desc: "Developed a centralized infrastructure health monitoring platform providing real-time visibility into SOC services, agents, log pipelines, and system components. Implemented alerting, diagnostics, and operational dashboards, improving platform reliability and reducing time to detect service degradation.",
  },
  {
    title: "Vulnerability Management",
    desc: "Built a vulnerability management solution automating asset discovery, vulnerability ingestion, risk-based prioritization, remediation tracking, and executive reporting by integrating multiple scanning technologies.",
  },
  {
    title: "RADAR (Real-Time Network Asset Discovery & Topology)",
    desc: "Built RADAR, a real-time network asset discovery and topology visualization platform for MSSP, SOC, and enterprise use — automatically discovering, classifying, and mapping every device on the network into a single live infrastructure view.",
  },
];

export default Industry;
