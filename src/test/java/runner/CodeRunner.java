package runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith( Cucumber.class )
@CucumberOptions( features = "src/test/resources/features",
        glue = { "steps" },
        plugin = { "pretty",
                "html:results/html/cucumber.html",
                "json:target/cucumber-report/cucumber.json",
                "io.qameta.allure.cucumber5jvm.AllureCucumber5Jvm"},
        tags = "@all",
        monochrome = true,
        stepNotifications = true
)
public class CodeRunner {

}
