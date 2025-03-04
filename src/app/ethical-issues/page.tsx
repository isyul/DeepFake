export default function EthicalIssues() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black p-8">
            <h1 className="text-4xl font-bold">Ethical Issues of Deepfakes</h1>
            <p className="mt-4 max-w-2xl text-center">
                Deepfake technology is at the forefront of ethical debates, raising concerns about privacy violations, misinformation, and its broader impact on society.
                While deepfakes have legitimate uses in entertainment and education, their misuse poses serious ethical dilemmas.
            </p>

            {/* Section: Privacy Violations */}
            <div className="mt-8 max-w-3xl border-t border-gray-600 pt-6">
                <h2 className="text-2xl font-semibold">Privacy Violations</h2>
                <p className="mt-4 text-gray-300">
                    Deepfake technology enables the unauthorized replication of an individual’s likeness, leading to severe privacy violations.
                    Public figures, celebrities, and even private individuals have been targeted by AI-generated content that manipulates their appearance, voice, and actions.
                </p>
                <p className="mt-4 text-gray-300">
                    A notable example involves <b>Manny Pacquiao</b>, whose deepfake videos falsely depicted him endorsing online gambling platforms.
                    Despite his public denials, these AI-generated ads misled thousands of people, demonstrating how deepfakes can strip individuals of control over their own identity.
                </p>
                <p className="mt-4 text-gray-300">
                    The issue extends beyond celebrities. With increasing access to AI tools, ordinary individuals can become victims of <b>non-consensual deepfake content</b>,
                    ranging from fraudulent endorsements to explicit content generated without their consent. This raises profound ethical questions:
                    <b> Do individuals have full ownership of their digital likeness?</b> How can society protect people from AI-driven identity theft?
                </p>
            </div>

            {/* Section: Misinformation and Fake News */}
            <div className="mt-8 max-w-3xl border-t border-gray-600 pt-6">
                <h2 className="text-2xl font-semibold">Misinformation and Fake News</h2>
                <p className="mt-4 text-gray-300">
                    The rise of deepfake technology has fueled the spread of misinformation and fake news, making it increasingly difficult to distinguish truth from falsehood.
                    AI-generated videos and manipulated audio recordings have been used to fabricate news reports, create false political statements, and mislead the public.
                </p>
                <p className="mt-4 text-gray-300">
                    One major example is the <b>fake news reports about PAGCOR</b>, where AI-generated anchors falsely claimed that the organization launched an online casino.
                    These deepfakes were so realistic that many viewers believed them to be legitimate, showcasing the immense danger of deepfake-driven misinformation.
                </p>
                <p className="mt-4 text-gray-300">
                    <b>Political deepfakes</b> are another growing threat. During elections, AI-generated videos of politicians making fabricated statements can manipulate public perception and influence voter behavior.
                    Without robust detection mechanisms, deepfake-driven misinformation could erode democratic integrity.
                </p>
                <p className="mt-4 text-gray-300">
                    As deepfake technology advances, <b>how can platforms like social media and news organizations verify the authenticity of digital content?</b>
                    The ethical responsibility of tech companies to counteract misinformation is a growing debate in the digital ethics landscape.
                </p>
            </div>

            {/* Section: Ethical Implications */}
            <div className="mt-8 max-w-3xl border-t border-gray-600 pt-6">
                <h2 className="text-2xl font-semibold">Ethical Implications of Deepfakes</h2>
                <p className="mt-4 text-gray-300">
                    Deepfakes challenge fundamental ethical principles, including truth, consent, and accountability. The technology’s ability to create hyper-realistic falsifications raises serious moral dilemmas.
                </p>

                {/* Subsection: Consent and Identity Theft */}
                <h3 className="mt-6 text-xl font-semibold">Consent and Identity Theft</h3>
                <p className="mt-4 text-gray-300">
                    The ethical principle of <b>consent</b> is violated when deepfakes are created without an individual’s permission.
                    Celebrities like <b>Anne Curtis</b> and <b>Shah Rukh Khan</b> have had their images manipulated in unauthorized advertisements.
                    This raises concerns about <b>whether individuals truly own their digital identity</b> or if AI-generated versions of them can be exploited without consequence.
                </p>

                {/* Subsection: Trust and Reality Manipulation */}
                <h3 className="mt-6 text-xl font-semibold">Trust and Reality Manipulation</h3>
                <p className="mt-4 text-gray-300">
                    Deepfakes undermine trust in digital media. If hyper-realistic fake content becomes indistinguishable from reality,
                    society risks <b>entering an era where video and audio evidence can no longer be trusted</b>.
                    This has severe consequences for journalism, law enforcement, and historical record-keeping.
                </p>
                <p className="mt-4 text-gray-300">
                    For instance, <b>BBC news anchors were deepfaked</b> into endorsing fraudulent investment schemes.
                    This manipulation not only deceived the public but also damaged the credibility of legitimate news organizations.
                </p>

                {/* Subsection: Legal and Regulatory Challenges */}
                <h3 className="mt-6 text-xl font-semibold">Legal and Regulatory Challenges</h3>
                <p className="mt-4 text-gray-300">
                    Existing laws struggle to keep pace with the rapid advancements in AI-generated media.
                    While some countries have introduced <b>deepfake legislation</b>, enforcement remains difficult.
                    The legal framework must balance <b>protecting individuals from harm</b> while preserving <b>freedom of expression</b> in AI-generated content.
                </p>
                <p className="mt-4 text-gray-300">
                    Notably, in <b>the case of Bruce Willis</b>, a deepfake version of the actor was used in a Russian telecom advertisement.
                    This incident sparked legal debates on whether AI-generated replicas of individuals can be used commercially without direct involvement.
                </p>
                <p className="mt-4 text-gray-300">
                    The need for international collaboration is crucial, as deepfakes <b>can be created in one country but distributed globally</b>, complicating enforcement efforts.
                </p>
            </div>

            {/* Conclusion */}
            <div className="mt-8 max-w-3xl border-t border-gray-600 pt-6">
                <h2 className="text-2xl font-semibold">Conclusion</h2>
                <p className="mt-4 text-gray-300">
                    The ethical concerns surrounding deepfake technology are vast and complex. From <b>violations</b> and <b>misinformation</b> to <b>erosion and legal dilemmas</b>,
                    deepfakes present a significant challenge to modern society. Ethical AI development, robust regulations, and widespread digital literacy are essential in mitigating the risks associated with deepfakes.
                </p>
            </div>
        </main>
    );
}
