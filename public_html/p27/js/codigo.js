var op = 1;
var regperso = {}, regfamily = {}, regjob = {}, regprofile = {};
while (op > 0) {
    op = menu();
    switch (op) {
        case 1:
            regperso = personal();
            break;
        case 2:
            regfamily = family();
            break
        case 3:
            regjob = refe_job();
            break;
        case 4:
            regprofile = profile();
            break;
        case 5:
            print(regperso, regfamily, regjob, regprofile);
            break;
    }
}