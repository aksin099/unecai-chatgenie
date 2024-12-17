const About = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">UNECAI Haqqında</h1>
          <p className="text-muted-foreground">Süni intellekt köməkçiniz</p>
        </div>

        <div className="grid gap-6 md:gap-8">
          <div className="space-y-4 bg-card p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold text-card-foreground">Nədir?</h2>
            <p className="text-muted-foreground">
              UNECAI, UNEC tələbələri üçün hazırlanmış süni intellekt əsaslı köməkçi
              sistemdir. Bu sistem tələbələrin suallarını cavablandırmaq və onlara təhsil
              prosesində kömək etmək məqsədi ilə yaradılmışdır.
            </p>
          </div>

          <div className="space-y-4 bg-card p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold text-card-foreground">Məqsədimiz</h2>
            <p className="text-muted-foreground">
              UNECAI-nin əsas məqsədi tələbələrin təhsil təcrübəsini asanlaşdırmaq 
              və daha səmərəli etməkdir. Biz tələbələrin akademik inkişafına dəstək olmaq 
              və onların təhsil səviyyəsini yüksəltmək üçün çalışırıq.
            </p>
          </div>

          <div className="space-y-4 bg-card p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold text-card-foreground">Komandamız</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium text-card-foreground">Layihə rəhbəri:</h3>
                <p className="text-muted-foreground">Akşin Ağaşirinov</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-card-foreground">Sistem nəzarəti və APİ tuning:</h3>
                <p className="text-muted-foreground">Turan Məsimli, Əsmər Məmmədova</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;