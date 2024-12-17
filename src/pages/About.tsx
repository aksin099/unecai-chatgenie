const About = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold text-primary">UNECAI Haqqında</h1>
        <div className="space-y-4 text-muted-foreground">
          <p>
            UNECAI, UNEC tələbələri üçün hazırlanmış süni intellekt əsaslı köməkçi
            sistemdir.
          </p>
          <p>
            Bu sistem tələbələrin suallarını cavablandırmaq və onlara təhsil
            prosesində kömək etmək məqsədi ilə yaradılmışdır.
          </p>
          <p>
            UNECAI-nin əsas məqsədi tələbələrin təhsil təcrübəsini
            asanlaşdırmaq və daha səmərəli etməkdir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;